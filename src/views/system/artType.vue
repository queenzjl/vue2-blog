<template>
    <div class="content">
        <el-row :gutter="20">
            <!-- <router-link to="/manage/addType"><el-col :span="2"><el-button type="primary" plain>添加分类</el-button></el-col></router-link> -->
            <el-col :span="2"><el-button type="primary" plain @click="addType">添加分类</el-button></el-col>
        </el-row>
        <el-row>
            <el-table class="table"  :data="tableData" style="width: 100%">
                <el-table-column align="center" prop="name" label="名称" ></el-table-column>
                <el-table-column align="center" prop="author" label="作者" ></el-table-column>
                <el-table-column align="center" prop="createtime" label="创建时间"></el-table-column>
                <el-table-column align="center" prop="updatetime" label="修改时间"></el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="editType(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="removeType(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>

        <el-dialog :title="isAddOperate ? '添加分类':'修改分类'" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="form" ref="form">
                <!-- <el-form-item label="分类名称：" prop="tags" align="left"> -->
                <el-input :span="10" v-model="form.name" placeholder="请输入分类名称"></el-input>
                <el-input :span="10" v-model="form._id" v-if="isShow"></el-input>
                <!-- </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm">确认</el-button>
            </div>
        </el-dialog>

        <user-dialog ref="childMsg"  @isLogined="getTypeList" 
            :dialogLoginVisible="dialogLoginVisible">
        </user-dialog>
    </div>
    
    
</template>


<script>
    import userDialog from './../../components/common/userDialog';
    import axios from 'axios';
    import moment from 'moment';
    export default {
        data(){
            return {
                tableData: [],
                dialogFormVisible: false,
                dialogLoginVisible: false,
                form: {
                    name: '',
                    _id: '',
                    author: this.GLOBAL.userId,
                },
                isAddOperate: true,
                isShow: false,
                rank: {
                    0: '超级管理员',
                    1: '普通会员'
                }
            }
        },
        mounted(){
            this.getTypeList();
        },
        components: {
            userDialog
        },
        methods: {
            submitForm(){
                if(this.isAddOperate){
                    this.addForm();
                }else{
                    this.editForm();
                }
            },
            addForm(){
                this.dialogFormVisible = false;

                axios.post('/system/addType', {name: this.form.name, author: this.form.author})
                .then( (res) => {
                    if(res.data.code == 0){
                        // this.$router.push("/manage/artType");
                        this.getTypeList();
                    }
                })
            },
            getTypeList(){
                let params = '';
                if(this.GLOBAL.userId && this.GLOBAL.userRank == 1 ){
                    params = '?author=' + this.GLOBAL.userId;
                }
                axios.get('/system/artTypeList' + params).then( (res) => {
                    if( res.data.code == 0 ){
                        let results = res.data.results;
                        //格式化时间
                        for(let i in results){
                            results[i].createtime = moment(results[i].createtime).format('YYYY-MM-DD HH:mm:ss')
                            results[i].updatetime = moment(results[i].updatetime).format('YYYY-MM-DD HH:mm:ss')

                            //格式化作者
                            results[i].author = results[i].author.name;
                        }
                        this.tableData = results;
                        this.dialogLoginVisible = false;
                    }else {
                        this.handleError(res.data);
                    }
                })
            },
            addType(){
                this.dialogFormVisible=true;
                this.isAddOperate = true;
                this.form.name = '';
            },
            editType(index, row){
                let _id = this.tableData[index]._id;
                this.getOneType(_id, (results) => {
                    console.log(results);
                    if(results && results.name){
                        this.form.name = results.name;
                        this.form._id = results._id;

                        this.dialogFormVisible = true;
                        this.isAddOperate = false;
                    }
                })
            },
            getOneType(id, callback){
                axios.get('/system/oneArtType?_id='+id).then( (res) => {
                    let data = res.data;
                    if(data.code == 0){
                        let results = data.results || [];
                        callback(results)
                    }
                })
            },
            editForm(){
                
                this.dialogFormVisible = false;
                axios.post('/system/updateType',this.form).then( (res) => {
                    if(res.data.code == 0){
                        this.getTypeList();
                    }
                })
            },
            removeType(index, row){

                this.$confirm('确定要删除此分类吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    //确定删除
                    let _id = this.tableData[index]._id;

                    axios.get('/system/removeType?_id='+ _id).then( (res) => {
                        if(res.data.code == 0){
                            this.getTypeList();
                        }
                    })
                    
                }).catch(() => {

                    return;         
                });
                
            },
            handleError(errData){
                if(errData.code == 413){
                    //未登录
                    this.dialogLoginVisible = true;
                }
            }
        }
    }
</script>


<style>
    .table {
        margin-top: 20px;
    }
</style>
