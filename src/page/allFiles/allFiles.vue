<template>
  <div>

   <el-tabs v-model="activeName"> 
    <el-tab-pane label="2018" name="first">2018</el-tab-pane>
    <el-tab-pane label="2017" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="2016" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="2015" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
export default{
    data(){
        return {
            activeName: 'second'
      };
    }
}
</script>
<style>

</style>
