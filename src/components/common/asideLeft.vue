<template>
  <div class="content">
        <el-row class="tac">
            <el-col :span="24">
                <h5><router-link to="/">博客技术分享</router-link></h5>
                <el-menu
                    default-active="articles"
                    class="el-menu-vertical-demo"
                    background-color="#2A2935"
                    text-color="#fff"
                    active-text-color="#32D3C3">
                    <router-link to="/articles">
                        <el-menu-item index="articles">
                            <span>最新文章</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/artTypes">
                        <el-menu-item index="artTypes">
                            <span>文章归档</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/aboutUs">
                        <el-menu-item index="aboutUs">
                            <span>关于我们</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/techSalon">
                        <el-menu-item index="techSalon">
                            <span>技术沙龙</span>
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
