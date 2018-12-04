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
                        <p>{{article.author}} &nbsp;·&nbsp;<span>{{article.createtime}}</span></p>
                        <div class="abstract">
                            {{article.content.substring(0,50)}}
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
    export default {
        data(){
            return {
                articles: [],
                activeName: 'first'
            }
        },
        mounted(){
            axios.get('/art/articleList').then(res => {
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
    .articles-index .el-col {
        margin-bottom: 20px;
    }
    .articles-index .header span {
        float: left;
    }
    .articles-index .header form {
        float: right;
    }
    .articles-index .header .el-col {
        border-bottom: 1px solid #ddd;
        padding: 10px 0 !important;
    }
    .articles-index .header .title {
        display: inline-block;
        height: 2em;
        line-height: 2em;
    }
    .articles-index .header .title:after {
        content: '';
        display:block;
        height: 0.6em;
        border-bottom: 2px solid #32D3C3;
    }
    /* 卡片部分 */
    .el-card__header {
        text-align: left;
    }
    .el-card__header h2{
        font-size: 1.5em;
        line-height: 1.5em;
        font-weight: normal;
        color: #333;
    }
    .el-card__header p{
        color: #aaa;
        font-size: 0.6em;
        line-height: 0.6em;
        margin: 1em 0;
    }
    .el-card__header div{
        color: #666;
        font-size: 1em;
        line-height: 1.4em;
    }
    .text {
        font-size: 14px;
    }

  .item {
    margin-bottom: 18px;
  }
  .el-tag {
      color:#32D3C3;
      border-color: #32D3C3;
      background: none;
      margin: 0 10px;
  }
</style>
