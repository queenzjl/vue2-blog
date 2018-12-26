<template>
    <div class="content">
        <el-row :gutter="20">
            <!-- <router-link to="/manage/addType"><el-col :span="2"><el-button type="primary" plain>添加分类</el-button></el-col></router-link> -->
            <el-col :span="2"><el-button type="primary" v-show="isManage" plain @click="addUser">添加用户</el-button></el-col>
        </el-row>
        <el-row>
            <el-table class="table"  :data="tableData" style="width: 100%">
                <el-table-column align="center" prop="name" label="用户名称" ></el-table-column>
                <el-table-column align="center" prop="rank" label="用户等级" ></el-table-column>
                <el-table-column align="center" prop="createtime" label="创建时间"></el-table-column>
                <el-table-column align="center" prop="updatetime" label="修改时间"></el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="editUser(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="removeUser(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>

        <el-dialog :title="isAddOperate ? '添加分类':'修改分类'" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="form" ref="form">
                <!-- <el-form-item label="分类名称：" prop="tags" align="left"> -->
                <el-input :span="10" v-model="form.name" placeholder="请输入分类名称"></el-input>
                <el-input :span="10" v-model="form._id"></el-input>
                <!-- </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm">确认</el-button>
            </div>
        </el-dialog>

        <user-dialog ref="childMsg"  @isLogined="getUserList" 
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
                    _id: ''
                },
                isManage: false,
                isAddOperate :'',
                rank: {
                    0: '超级管理员',
                    1: '普通会员'
                }
            }
        },
        mounted(){
            this.getUserList();

            if(this.GLOBAL.userRank == 0){
                this.isManage = true;
            }
        },
        components: {
            userDialog
        },
        methods: {
            addUser(){

            },
            editUser(){

            },
            submitForm(){

            },
            removeUser(){

            },
            getUserList(){
                let params = '';
                if(this.GLOBAL.userId && this.GLOBAL.userRank == 1 ){
                    params = '?_id=' + this.GLOBAL.userId;
                }
                
                let _this = this;

                axios.get('/system/getUserList' + params).then( (res) => {
                    if( res.data.code == 0 ){
                        let results = res.data.results;
                        //格式化时间
                        for(let i in results){
                            results[i].createtime = moment(results[i].createtime).format('YYYY-MM-DD HH:mm:ss')
                            results[i].updatetime = moment(results[i].updatetime).format('YYYY-MM-DD HH:mm:ss')

                            results[i].rank = _this.rank[results[i].rank];
                        }
                        this.tableData = results;
                        this.dialogLoginVisible = false;
                    }else {
                        this.handleError(res.data);
                    }
                })
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
