<template>
  <div class="content">
        <el-row class="tac">
            <el-col :span="24">
                <h5><router-link to="/">博客技术分享</router-link></h5>
                <el-menu
                    :default-active="nowPath"
                    class="el-menu-vertical-demo"
                    background-color="#2A2935"
                    text-color="#fff"
                    active-text-color="#32D3C3">
                    <router-link to="/manage/article">
                        <el-menu-item index="article">
                            <span>文章管理</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/manage/artType">
                        <el-menu-item index="artType">
                            <span>分类管理</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/manage/artTag">
                        <el-menu-item index="artTag">
                            <span>标签管理</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/manage/userManage">
                        <el-menu-item index="userManage">
                            <span>用户管理</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </el-col>
        </el-row>
  </div>
</template>
<script>
export default {
    data(){
        return {
            nowPath: (this.$route.path).substr(8) == 'addArticle' ? 'article' : (this.$route.path).substr(8)
        }
    },
    mounted(){
        
    }
};
</script>
<style>
    h5 {
        color: #32D3C3;
        font-size: 1.5em;
        text-align: right;
        padding: 10px 30px;
        font-weight: normal;
        background: #26252f;
        margin-bottom: 30px;
    }
    h5 a {
        color: #32D3C3;
    }
    .el-menu {
        border-right: none;
    }
    .el-menu-item {
        text-align: right;
        font-size: 1em;
    }
</style>
