<template>
    <div class="aboutUs-index">
        <el-row>
            <el-col :span="18" :offset="2">
                <h1>{{articles.title}}</h1>
                <p class="article_author">{{articles.author}} &nbsp;·&nbsp;<span>{{articles.createtime}}</span></p>
                <div class="content">{{articles.content}}
                </div>
                <div class="clearfix">
                    <template v-for="tag in articles.tags">
                        <el-tag>{{tag.name}}</el-tag>
                    </template>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios';
import moment from 'moment'
export default {
    data(){
        return {
            articles: []
        }
    },
    mounted(){
        axios.get('/art/oneArticle?_id='+ this.$route.params.id).then(res => {
            if(res.data.code == 0){
                let results = res.data.results || [];
                if(results){
                    
                    results.createtime = moment(results.createtime).format('YYYY-MM-DD HH:mm:ss')
                    
                } 
                this.articles = results || [];
                console.log(this.articles)
            }
        })
    }
};
</script>
<style>
h1 {
    font-size: 2em;
    padding: 20px 0;
}
.article_author{
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
}
.aboutUs-index .content {
    text-align: left;
    font-size: 1em;
    line-height: 1.8em;
    margin: 30px 0;
    color: #666;
}
</style>
