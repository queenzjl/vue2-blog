<template>
    <div class="content">
        <el-row :gutter="20">
            <router-link to="/manage/addTag"><el-col :span="2"><el-button type="primary" plain>添加标签</el-button></el-col></router-link>
        </el-row>
        <el-row>
            <el-table class="table"  :data="tableData" style="width: 100%">
                <el-table-column align="center" prop="name" label="名称" ></el-table-column>
                <el-table-column align="center" prop="createtime" label="创建时间"></el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini">编辑</el-button>
                        <el-button size="mini" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>

    </div>
    
    
</template>


<script>
    import axios from 'axios';
    import moment from 'moment';
    export default {
        data(){
            return {
                tableData: []
            }
        },
        mounted(){
            axios.get('/art/artTagList').then( (res) => {
                console.log(res.data.results);
                if( res.data.code == 0 ){
                    let results = res.data.results;
                    //格式化时间
                    for(let i in results){
                        results[i].createtime = moment(results[i].createtime).format('YYYY-MM-DD HH:mm:ss')
                    }
                    this.tableData = results;
                }
            })
        }
    }
</script>


<style>
    .table {
        margin-top: 20px;
    }
</style>
