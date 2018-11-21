<template>
    <div class="content">
        <el-row>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="名称">
                    <el-input :span="10" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addForm()">立即创建</el-button>
                    <router-link to="/manage"><el-button>取消</el-button></router-link>
                </el-form-item>
            </el-form>
        </el-row>
        
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                form: {
                    name: ''
                }
            }
        },
        methods: {
            addForm(){
                axios.post('/art/addType', this.form)
                .then( (res) => {
                    console.log(res)
                    if(res.data.code == 0){
                        this.$router.push("/manage/artType");
                    }
                })
            }
        }
    }
</script>