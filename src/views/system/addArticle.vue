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
                <el-form-item label="分类" prop="region">
                    <el-input v-model="form.type"></el-input>
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
                    <el-button>取消</el-button>
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
                    type: '',
                    read: '',
                    support: '',
                    content: ''
                }
            }
        },
        methods: {
            addForm(){
                axios.get('/api/server/addArticle', {
                    title: this.form.title,
                    author: this.form.author})
                .then( (res) => {
                    console.log(res)
                })
            }
        }
    }
</script>