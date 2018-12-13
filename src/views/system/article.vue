<template>
    <div class="content">
        <el-row :gutter="20">
            <router-link to="/manage/addArticle"><el-col :span="2"><el-button type="primary" plain>添加文章</el-button></el-col></router-link>
        </el-row>
        <el-row>
            <el-table class="table"  :data="tableData" style="width: 100%">
                <el-table-column align="center" prop="title" label="名称" ></el-table-column>
                <el-table-column align="center" prop="author" label="作者"></el-table-column>
                <el-table-column align="center" prop="tags" label="标签"></el-table-column>
                <el-table-column align="center" prop="type" label="分类"></el-table-column>
                <el-table-column align="center" prop="read" label="阅读人数" ></el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini">编辑</el-button>
                        <el-button size="mini" type="danger"  @click="removeArticle(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>

        <user-dialog ref="childMsg"  :dialogRegisterVisible="dialogRegisterVisible" :dialogLoginVisible="dialogLoginVisible"></user-dialog>
    </div>
    
</template>

<script>
    import userDialog from './../../components/common/userDialog';
    import axios from 'axios';
    export default {
        data(){
            return {
                tableData: [],
                dialogRegisterVisible:false,
                dialogLoginVisible: false
            }
        },
        mounted(){
            this.getArticleList();
        },
        components: {
            userDialog
        },
        methods: {
            getArticleList(){
                axios.get('/art/articleList').then( (res) => {
                    if(res.data.code == 0){
                        let results = res.data.results || [];
                        if(results){
                            for(let i in results){
                                let nowType = results[i].type
                                let nowTags = results[i].tags
                                results[i].type = '';
                                results[i].tags = '';
                                for(let j in nowType){
                                    results[i].type += nowType[j].name + ' '
                                }
                                for(let j in nowTags){
                                    results[i].tags += nowTags[j].name+ ' '
                                }
                            }
                        } 
                        this.tableData = results || [];
                    }else {
                        this.handleError(res.data);
                    }
                })
            },
            removeArticle(index, row){
                let _id = this.tableData[index]._id;

                axios.get('/art/removeArticle?_id='+_id).then( (res) => {
                    let data = res.data;
                    if(data.code == 0){
                        //删除成功
                        this.getArticleList();
                    }
                })
            },
            handleError(errData){
                if(errData.code == 413){
                    //未登录
                    console.log("未登录");
                    console.log(this.dialogRegisterVisible);
                    this.dialogRegisterVisible = false;
                    this.dialogLoginVisible = true;
                }
            }
        }
    }
</script>


<style>
    .table {
        margin-top: 20px;
    }
</style>
