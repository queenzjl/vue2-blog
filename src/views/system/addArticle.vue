<template>
    <div class="content">
        <el-row class="row">
            <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="form">
                <el-row class="article-header">
                    <el-col :span="20" >
                        <el-input class="title-input" v-model="form.title" placeholder="请输入文章标题"></el-input>
                    </el-col>
                    <el-col :span="4">
                        <el-button  type="primary" @click="dialogFormVisible=true">发布</el-button>
                    </el-col>
                </el-row>
                <!-- <el-form-item label="作者">
                    <el-input v-model="form.author"></el-input>
                </el-form-item> -->
                <mavon-editor ref="md" v-model="form.content" class="article-content" @change="changeData" />
                
            </el-form>
        </el-row>
        <el-dialog title="发布文章" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="form" :rules="rules" ref="form">
                <el-form-item label="文章标签：" prop="tags" align="left">
                    <el-checkbox-group v-model="form.tags">
                        <el-checkbox v-for="item in artTags" :label="item._id" name="tags">{{item.name}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="文章分类：" prop="type" align="left">
                    <el-checkbox-group v-model="form.type" >
                        <el-checkbox v-for="item in artTypes" :label="item._id" name="type">{{item.name}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addForm">发布</el-button>
            </div>
        </el-dialog>

        <user-dialog ref="childMsg"  @isLogined="getDataList"  
            :dialogLoginVisible="dialogLoginVisible">
        </user-dialog>
    </div>
</template>
<script>
    import userDialog from './../../components/common/userDialog';
    import Vue from 'vue'
    import axios from 'axios';
    import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
        
    Vue.use(mavonEditor)
    export default {
        data(){
            return {
                form: {
                    title: '',
                    author: this.GLOBAL.userId,
                    tags: [],
                    type: [],
                    read: '',
                    support: '',
                    content: ''
                },
                dialogLoginVisible: false,
                dialogFormVisible: false,
                contentHtml: '',
                rules: {
                    title: [
                        { required: true, message: '请输入文章标题', trigger: 'blur' },
                        { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                    ],
                    tags: [
                        { type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个文章分类', trigger: 'change' }
                    ],
                    content: [
                        { required: true, message: '请输入文章内容', trigger: 'blur' }
                    ]
                },
                artTypes: [],
                artTags:[]
            }
        },
        mounted(){
            this.getDataList();
            
        },
        components: {
            userDialog
        },
        methods: {
            addForm(){
                
                this.dialogFormVisible = false;
                this.form.content = this.contentHtml;
                axios.post('/system/addArticle', this.form)
                .then( (res) => {
                    if(res.data.code == 0){
                        this.$router.push('/manage')
                    }
                })
            },
            addArticles(){
                console.log(this.contentHtml)
            },
            changeData(value, render){
                this.contentHtml = render;
            },
            handleError(errData){
                if(errData.code == 413){
                    //未登录
                    this.dialogLoginVisible = true;
                }
            },
            getDataList(){
                this.getTypeList();
                this.getTagList();
            },
            getTypeList(){
                axios.get('/system/artTypeList').then( (res) => {
                    if(res.data.code == 0){
                        this.artTypes = res.data.results;
                    }else {
                        this.handleError(res.data);
                    }
                })
                
            },
            getTagList(){
                axios.get('/system/artTagList').then( (res) => {
                    if(res.data.code == 0){
                        this.artTags = res.data.results;
                    }else {
                        this.handleError(res.data);
                    }
                })
            }
        }
    }
</script>
<style>
    .el-main {
        padding: 0
    }
    .article-header {
        background: #fff;
    }
    .article-header .el-col-4 {
        height: 60px;
        line-height: 60px;
    }
    .article-header .el-col-4 button {
        font-size: 16px;
    }
    .title-input input {
        height: 60px;
        line-height: 60px;
        border: none;
        font-size: 18px;
    }
    .v-note-wrapper .v-note-op.shadow {
        border: none;
        box-shadow: 0 0px 1px rgba(0,0,0,0.157), 0 0px 1px rgba(0,0,0,0.227) !important;
    }
    .v-note-wrapper .v-note-panel.shadow {
        border: none;
        box-shadow:none !important;
    }
    .content, .content .row, .content .row .form {
        height: 100%;
    }
    .content .row .form .article-content{
        height: calc(100% - 60px);
    }
    .el-dialog__header,.el-dialog__title {
        text-align: left;
    }
</style>
