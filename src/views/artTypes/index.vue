<template>
    <div class="artTypes-index">
        <el-row class="header">
            <el-col :span="20" >
                <el-tabs @tab-click="activeTab">
                    <template v-for="type in artTypes" >
                         <el-tab-pane :label="type.name" :_id="type._id" v-if="articles.length">
                            <el-row :gutter="20" >
                                <el-col :span="12" v-for="article in articles">
                                    <el-card class="box-card">
                                        <div slot="header" class="clearfix">
                                            <router-link :to="{name: 'artDetail', params: {id: article._id}}">
                                                <h2 class="text-left">{{article.title}}</h2>
                                            </router-link>
                                            <p class="author-p">{{article.author}} &nbsp;·&nbsp;<span>{{article.createtime}}</span></p>
                                            <div class="abstract">{{article.content| filterHtml}}</div>
                                        </div>
                                    </el-card>
                                </el-col>
                               
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane :label="type.name" :_id="type._id" v-else>
                                该分类下暂时没有文章！
                        </el-tab-pane>
                    </template>
                 </el-tabs>
            </el-col>
            
        </el-row>
       
    </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
import './../../assets/css/article.css'
export default {
    data(){
        return {
            artTypes: [],
            articles: []
        }
    },
    filters: {
        filterHtml: function(value){
            return value.replace(/<[^>]+>/g,"").substring(0,90)+"......"
        }
    },
    beforeMount() {
        
    },
    mounted(){
        axios.get('/front/artTypeList').then(res => {
            if( res.data.code == 0 ){
                let results = res.data.results;
                
                this.artTypes = results;
                //获取第一个分类下的文章
                this.findArticlesByType(this.artTypes[0]._id)
            }
        })
    },
    methods: {
        activeTab(tagName){
            let _id = tagName.$attrs._id;
            if(_id){
                this.findArticlesByType(_id);
            }
            
        },
        findArticlesByType(typeId){
            axios.get('/front/articleList?type='+typeId).then( (res) => {
                let data = res.data;
                if(data.code == 0 && data.results){
                    let results = data.results;
                    for(let i in results){
                        results[i].createtime = moment(results[i].createtime).format('YYYY-MM-DD HH:mm:ss');
                        
                        results[i].author = results[i].author.name;
                    }
                    this.articles = results;
                }
            })

        }

    }
};
</script>
<style>
    .artTypes-index .el-row {
        margin-bottom: 20px;
    }
    .el-tabs__item.is-active, .el-tabs__item:hover, .el-tabs__item:focus {
        color: #32D3C3; 
    }
    .el-tabs__active-bar {
        background-color: #32D3C3;
    }
    
    .el-tag {
        color:#32D3C3;
        border-color: #32D3C3;
    }
</style>
