<template>
    <div class="content">
        <el-row :gutter="20">
            <router-link to="/manage/addArticle"><el-col :span="2"><el-button type="primary" plain>添加文章</el-button></el-col></router-link>
        </el-row>
        <el-row>
            <el-table class="table"  :data="tableData" style="width: 100%">
                <el-table-column align="center" prop="title" label="名称" ></el-table-column>
                <el-table-column align="center" prop="author" label="作者"></el-table-column>
                <el-table-column align="center" prop="tag" label="标签"></el-table-column>
                <el-table-column align="center" prop="type" label="分类"></el-table-column>
                <el-table-column align="center" prop="read" label="阅读人数" ></el-table-column>
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
    export default {
        data(){
            return {
                tableData: [{
                    title: '文章111',
                    author: '静蕾',
                    tag: 'javascript react',
                    type: '前端',
                    read: 150
                }, {
                    title: '文章111',
                    author: '静蕾',
                    tag: 'javascript react',
                    type: '前端',
                    read: 150
                }, {
                    title: '文章111',
                    author: '静蕾',
                    tag: 'javascript react',
                    type: '前端',
                    read: 150
                }, {
                    title: '文章111',
                    author: '静蕾',
                    tag: 'javascript react',
                    type: '前端',
                    read: 150
                }]
            }
        }
    }
</script>


<style>
    .table {
        margin-top: 20px;
    }
</style>
