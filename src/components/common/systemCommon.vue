<template>
  <div class="content">
        <el-container>
            <el-aside>
                <system-aside-left></system-aside-left>
            </el-aside>
            <el-main>
                 <router-view></router-view>
            </el-main>
        </el-container>
      
     
  </div>
</template>
<script>
    import systemAsideLeft from './systemAsideLeft'
    export default {
        data(){
            return {
                // path: this.$route.path.split('/')[1]
            }
        },
        /* mounted(){
            console.log(this.$route.path.split('/')[1])
        }
        , */
        components: {
            systemAsideLeft
        }
    }
</script>
<style>
.el-container,.content {
    height: 100%;
}
.el-aside {
    background-color: #2A2935;
    color: #333;
    width: 220px !important;
  }
  
  .el-main {
    background-color: #F4F4F4;
    color: #333;
    text-align: center;
    padding: 10px 60px;
  }
</style>
