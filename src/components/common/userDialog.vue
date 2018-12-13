<template>
    <div class="login">
        <el-dialog center title="" :visible.sync="dialogLoginVisible" close-on-click-modal="false">
                 
            <el-tabs v-model="activeName">
                <el-tab-pane label="登录" name="first">
                    <el-form :model="form">
                        <el-form-item label="用户名"  label-width="120px">
                            <el-input v-model="form.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="密码"  label-width="120px">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                        <el-button type="primary" @click="dialogLoginVisible = false">登录</el-button>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second">
                    <el-form :model="form">
                        <el-form-item label="用户名" label-width="120px">
                            <el-input v-model="form.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="密码" label-width="120px">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" label-width="120px">
                            <el-input v-model="form.confirmPwd"></el-input>
                        </el-form-item>
                         <el-button type="primary" @click="dialogRegisterVisible = false">注册</el-button>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
       
        </el-dialog>
         
    </div>
</template>
<script>
    export default {
        props: {
            dialogRegisterVisible: {
                type: Boolean,
                default: false
            },
            dialogLoginVisible:{
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                labelPosition: 'right',
                activeName: 'first',
                form: {
                    name: '',
                    password: '',
                    confirmPwd:''
                }
            }
        },
        methods:{
        }
    }
</script>