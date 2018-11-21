<template>
    <div class="content">
        <el-row>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="标题">
                    <el-input :span="10" v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="作者">
                    <el-input v-model="form.author"></el-input>
                </el-form-item>
                <el-form-item label="标签">
                    <el-input v-model="form.tags"></el-input>
                </el-form-item>
                <el-form-item label="分类">
                    <el-checkbox-group v-model="form.type" >
                        <el-checkbox v-for="item in artTypes" :label=item name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="阅读人数">
                    
                    <el-input v-model="form.read"></el-input>
                </el-form-item>
                <el-form-item label="点赞">
                    
                    <el-input v-model="form.support"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input type="textarea" v-model="form.content"></el-input>
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
                    tags: '',
                    type: [],
                    read: '',
                    support: '',
                    content: ''
                },
                artTypes: []
            }
        },
        mounted(){
            axios.get('/art/artTypeList').then( (res) => {
                console.log(res.data.results);
                if( res.data.code == 0 ){
                    let results = res.data.results;
                    //格式化时间
                    for(let i in results){
                        this.artTypes.push(results[i].name);
                        this.form.type.push(results[i]._id);
                    }
                    console.log(this.form.type)
                }
            })
        },
        methods: {
            addForm(){
                axios.post('/server/addArticle', {
                    title: this.form.title,
                    author: this.form.author})
                .then( (res) => {
                    console.log(res)
                })
            }
        }
    }
</script>