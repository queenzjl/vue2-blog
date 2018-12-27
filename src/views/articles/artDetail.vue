<template>
    <div class="aboutUs-index">
        <el-row>
            <el-col :span="18" :offset="2">
                <h1>{{articles.title}}</h1>
                <p class="article_author">
                    <span>{{articles.author}}</span> &nbsp;·&nbsp;
                    <span>{{articles.createtime}}</span> &nbsp;&nbsp;
                    <span>阅读人数：{{articles.read}}</span>
                </p>
                <div class="content markdown-body"  v-html="articles.content">
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
import "mavon-editor/dist/css/index.css";
export default {
    data(){
        return {
            articles: []
        }
    },
    mounted(){
        axios.get('/front/oneArticle?_id='+ this.$route.params.id).then( (res) => {
            if(res.data.code == 0){
                let results = res.data.results || [];
                if(results){
                    
                    results.createtime = moment(results.createtime).format('YYYY-MM-DD HH:mm:ss')
                    //格式化文章作者
                    results.author = results.author.name;
                } 
                this.articles = results || [];

                this.update();
            }
        })
    },
    methods:{
        update(){
            axios.get('/front/updateArticle?_id='+ this.$route.params.id).then( (res) => {
                console.log(res.data)
            })
        }
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
    color: #999;
    font-size: 0.8em;
}
.aboutUs-index .content {
    text-align: left;
    font-size: 1em;
    line-height: 1.8em;
    margin: 30px 0;
    color: #666;
}
</style>
