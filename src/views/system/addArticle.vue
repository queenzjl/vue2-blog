<template>
    <div class="content">
        <el-row>
            <el-form ref="form" :rules="rules" :model="form" label-width="80px">
                <el-form-item label="标题" prop="title">
                    <el-input :span="10" v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="作者">
                    <el-input v-model="form.author"></el-input>
                </el-form-item>
                <el-form-item label="标签" prop="tags" align="left">
                    <el-checkbox-group v-model="form.tags">
                        <el-checkbox v-for="item in artTags" :label="item._id" name="tags">{{item.name}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="分类" prop="type" align="left">
                    <el-checkbox-group v-model="form.type" >
                        <el-checkbox v-for="item in artTypes" :label="item._id" name="type">{{item.name}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="内容" prop="content">
                    <el-input type="textarea" v-model="form.content" aria-rowcount="10"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addForm()">立即创建</el-button>
                    <router-link to="/manage"><el-button>取消</el-button></router-link>
                </el-form-item>
            </el-form>
        </el-row>
        
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                form: {
                    title: '',
                    author: '',
                    tags: [],
                    type: [],
                    read: '',
                    support: '',
                    content: ''
                },
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
            axios.get('/art/artTypeList').then( (res) => {
                if(res.data.code == 0){
                    this.artTypes = res.data.results;
                }
            })
            axios.get('/art/artTagList').then( (res) => {
                if(res.data.code == 0){
                    this.artTags = res.data.results;
                }
            })
        },
        methods: {
            addForm(){
                axios.post('/art/addArticle', this.form)
                .then( (res) => {
                    if(res.data.code == 0){
                        this.$router.push('/manage')
                    }
                })
            }
        }
    }
</script>