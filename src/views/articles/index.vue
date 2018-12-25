<template>
    <div class="articles-index">
        <el-row class="header">
            <el-col :span="20" >
                <span class="title">最新文章</span>
                <form action="">
                    <el-input
                        placeholder="请输入内容"
                        size="mini"
                        suffix-icon="el-icon-search">
                    </el-input>
                </form>
            </el-col>
            
        </el-row>
        <!-- 内容 -->
        <el-row :gutter="20">
            <el-col :span="10" v-for="(article, index) in articles" >
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <router-link :to="{name: 'artDetail', params: {id: article._id}}">
                            <h2 class="text-left">{{article.title}}</h2>
                        </router-link>
                        <p class="author-p">{{article.author}} &nbsp;·&nbsp;<span>{{article.createtime}}</span></p>
                        <div class="abstract" v-html=" article.content.substring(0,60)">
                           
                        </div>
                    </div>
                    <div class="clearfix">
                        <template v-for="tag in article.tags">
                            <el-tag>{{tag.name}}</el-tag>
                        </template>
                    </div>
                </el-card>
            </el-col>
          
        </el-row>
    </div>
</template>
<script>
    import axios from 'axios'
    import moment from 'moment'
    import './../../assets/css/article.css'
    export default {
        data(){
            return {
                articles: [],
                activeName: 'first'
            }
        },
        mounted(){
            axios.get('/system/articleList').then(res => {
                if(res.data.code == 0){
                    let results = res.data.results || [];
                    if(results){
                        for(let i in results){
                            let nowType = results[i].type
                            let nowTags = results[i].tags
                            results[i].createtime = moment(results[i].createtime).format('YYYY-MM-DD HH:mm:ss')
                        }
                    } 
                    this.articles = results || [];
                }
            })
        }
    }
</script>
<style>
    
</style>
