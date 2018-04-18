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
                        <router-link :to="{name: 'artDetail', params: {id: 3}}">
                            <h2 class="text-left">{{article.title}}</h2>
                        </router-link>
                        <p>{{article.author_name}} &nbsp;·&nbsp;<span>{{article.date}}</span></p>
                        <div class="abstract">
                            {{article.abstract}}
                        </div>
                    </div>
                    <div class="clearfix">
                        <el-tag>标签一</el-tag>
                        <el-tag>标签二</el-tag>
                        <el-tag>标签三</el-tag>
                        <el-tag>标签四</el-tag>
                        <el-tag>标签五</el-tag>
                    </div>
                </el-card>
            </el-col>
           <!--  <el-col :span="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <router-link :to="{name: 'artDetail', params: {id: 3}}">
                            <h2 class="text-left">卡片名称</h2>
                        </router-link>
                        <p>张静蕾 &nbsp;·&nbsp;<span>2018-04-08</span></p>
                        <div class="abstract">
                            本文介绍了使用传统Toast存在的问题和对应的解决方案，并详细讲解了美团最终实现的用Snackbar替换Toast的方案
                        </div>
                    </div>
                    <div class="clearfix">
                        <el-tag>标签一</el-tag>
                        <el-tag>标签二</el-tag>
                        <el-tag>标签三</el-tag>
                        <el-tag>标签四</el-tag>
                        <el-tag>标签五</el-tag>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <router-link :to="{name: 'artDetail', params: {id: 3}}">
                            <h2 class="text-left">卡片名称</h2>
                        </router-link>
                        <p>张静蕾 &nbsp;·&nbsp;<span>2018-04-08</span></p>
                        <div class="abstract">
                            本文介绍了使用传统Toast存在的问题和对应的解决方案，并详细讲解了美团最终实现的用Snackbar替换Toast的方案
                        </div>
                    </div>
                    <div class="clearfix">
                        <el-tag>标签一</el-tag>
                        <el-tag>标签二</el-tag>
                        <el-tag>标签三</el-tag>
                        <el-tag>标签四</el-tag>
                        <el-tag>标签五</el-tag>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <router-link :to="{name: 'artDetail', params: {id: 3}}">
                            <h2 class="text-left">卡片名称</h2>
                        </router-link>
                        
                        <p>张静蕾 &nbsp;·&nbsp;<span>2018-04-08</span></p>
                        <div class="abstract">
                            本文介绍了使用传统Toast存在的问题和对应的解决方案，并详细讲解了美团最终实现的用Snackbar替换Toast的方案
                        </div>
                    </div>
                    <div class="clearfix">
                        <el-tag>标签一</el-tag>
                        <el-tag>标签二</el-tag>
                        <el-tag>标签三</el-tag>
                        <el-tag>标签四</el-tag>
                        <el-tag>标签五</el-tag>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <router-link :to="{name: 'artDetail', params: {id: 3}}">
                            <h2 class="text-left">卡片名称</h2>
                        </router-link>
                        <p>张静蕾 &nbsp;·&nbsp;<span>2018-04-08</span></p>
                        <div class="abstract">
                            本文介绍了使用传统Toast存在的问题和对应的解决方案，并详细讲解了美团最终实现的用Snackbar替换Toast的方案
                        </div>
                    </div>
                    <div class="clearfix">
                        <el-tag>标签一</el-tag>
                        <el-tag>标签二</el-tag>
                        <el-tag>标签三</el-tag>
                        <el-tag>标签四</el-tag>
                        <el-tag>标签五</el-tag>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <router-link :to="{name: 'artDetail', params: {id: 3}}">
                            <h2 class="text-left">卡片名称</h2>
                        </router-link>
                        <p>张静蕾 &nbsp;·&nbsp;<span>2018-04-08</span></p>
                        <div class="abstract">
                            本文介绍了使用传统Toast存在的问题和对应的解决方案，并详细讲解了美团最终实现的用Snackbar替换Toast的方案
                        </div>
                    </div>
                    <div class="clearfix">
                        <el-tag>标签一</el-tag>
                        <el-tag>标签二</el-tag>
                        <el-tag>标签三</el-tag>
                        <el-tag>标签四</el-tag>
                        <el-tag>标签五</el-tag>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <router-link :to="{name: 'artDetail', params: {id: 3}}">
                            <h2 class="text-left">卡片名称</h2>
                        </router-link>
                        <p>张静蕾 &nbsp;·&nbsp;<span>2018-04-08</span></p>
                        <div class="abstract">
                            本文介绍了使用传统Toast存在的问题和对应的解决方案，并详细讲解了美团最终实现的用Snackbar替换Toast的方案
                        </div>
                    </div>
                    <div class="clearfix">
                        <el-tag>标签一</el-tag>
                        <el-tag>标签二</el-tag>
                        <el-tag>标签三</el-tag>
                        <el-tag>标签四</el-tag>
                        <el-tag>标签五</el-tag>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <router-link :to="{name: 'artDetail', params: {id: 3}}">
                            <h2 class="text-left">卡片名称</h2>
                        </router-link>
                        <p>张静蕾 &nbsp;·&nbsp;<span>2018-04-08</span></p>
                        <div class="abstract">
                            本文介绍了使用传统Toast存在的问题和对应的解决方案，并详细讲解了美团最终实现的用Snackbar替换Toast的方案
                        </div>
                    </div>
                    <div class="clearfix">
                        <el-tag>标签一</el-tag>
                        <el-tag>标签二</el-tag>
                        <el-tag>标签三</el-tag>
                        <el-tag>标签四</el-tag>
                        <el-tag>标签五</el-tag>
                    </div>
                </el-card>
            </el-col> -->
        </el-row>
    </div>
</template>
<script>
    import axios from 'axios'
    import {getArticles} from '../../service/getData'
    
    export default {
        data(){
            return {
                articles: [],
                activeName: 'first'
            }
        },
        mounted(){
            /* getArticles().then(res => {
                console.log(res)
            }) */
            axios.get('/api/articles').then(res => {
                this.articles = res.data.data;
                console.log(res)
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
  }
</style>
