<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="2"><el-button type="primary" plain @click="addTag">添加标签</el-button></el-col>
        </el-row>
        <el-row>
            <el-table class="table"  :data="tableData" style="width: 100%">
                <el-table-column align="center" prop="name" label="名称" ></el-table-column>
                <el-table-column align="center" prop="createtime" label="创建时间"></el-table-column>
                <el-table-column align="center" prop="updatetime" label="修改时间"></el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="editTag(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="removeTag(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-dialog :title="isAddOperate ? '添加标签':'修改标签'" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="form" ref="form">
                <!-- <el-form-item label="分类名称：" prop="tags" align="left"> -->
                <el-input :span="10" v-model="form.name" placeholder="请输入标签名称"></el-input>
                <el-input :span="10" v-model="form._id" v-if="isShow"></el-input>
                <!-- </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm">确认</el-button>
            </div>
        </el-dialog>
    </div>
    
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
    export default {
        data(){
            return {
                tableData: [],
                dialogFormVisible: false,
                isAddOperate: false,
                isShow: false,
                form: {
                    name: '',
                    _id: ''
                }
            }
        },
        mounted(){
            this.getArtTagList();
        },
        methods: {
            addTag(){
                this.dialogFormVisible = true;
                this.isAddOperate = true;
                this.form.name = '';
            },
            submitForm(){
                if(this.isAddOperate){
                    this.addForm();
                }else{
                    this.editForm();
                }
            },
            addForm(){
                this.dialogFormVisible = false;

                axios.post('/system/addArtTag', {name: this.form.name})
                    .then( (res) => {
                        if(res.data.code == 0){
                            // this.$router.push("/manage/artTag");

                            this.getArtTagList();
                        }
                    })
            },
            editForm(){
                this.dialogFormVisible = false;

                axios.post('/system/updateOneTag', this.form)
                    .then( (res) => {
                        if(res.data.code == 0){
                            // this.$router.push("/manage/artTag");
                            this.getArtTagList();
                        }
                    })
            },
            getArtTagList(){
                axios.get('/system/artTagList').then( (res) => {
                    if( res.data.code == 0 ){
                        let results = res.data.results;
                        //格式化时间
                        for(let i in results){
                            results[i].createtime = moment(results[i].createtime).format('YYYY-MM-DD HH:mm:ss')
                            results[i].updatetime = moment(results[i].updatetime).format('YYYY-MM-DD HH:mm:ss')
                        }
                        this.tableData = results;
                    }
                })
            },
            getOneTag(id, callback){
                if(!id){
                    return;
                }
                axios.get('/system/getOneTag?_id='+ id).then( (res) => {
                    let data = res.data;
                    if( data.code ==0 ){
                        let result = data.results || [];
                        callback(result);
                    }
                })
            },
            editTag(index, row){
                let _id = this.tableData[index]._id;
                if(_id){
                    this.getOneTag(_id, (result) => {
                        if(result){
                            this.form = result;
                            this.dialogFormVisible = true;
                            this.isAddOperate = false;
                        }
                    })
                }
            },
            removeTag(index, row){
                let _id = this.tableData[index]._id;
                axios.get('/system/removeTag?_id='+ _id).then( (res) => {
                    if(res.data.code == 0){
                        this.getArtTagList();
                    }
                })
            }
        }
    }
</script>


<style>
    .table {
        margin-top: 20px;
    }
</style>
