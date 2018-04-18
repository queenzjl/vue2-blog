<template>
    <div class="register-index">
        <div class="register-wrap">
            <div class="ms-title">
                <span>
                    <router-link to="/user/login" :style="path === 'login'? isActive : ''">登录</router-link>
                </span>
                <span>
                    <router-link to="/user/login" :style="path === 'register'? isActive : ''">注册</router-link>
                </span>
            </div>
            <div class="ms-form">
                <el-form  ref="ruleForm2" label-width="82px" class="demo-ruleForm">
                    <el-form-item label="用户名">
                        <el-input type="text" placeholder="至少4个字符"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" placeholder="至少6个字符"></el-input>
                    </el-form-item>
                        <el-form-item label="确认密码" prop="pass">
                        <el-input type="password" placeholder="请再次输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input type="text" placeholder="请填写真实邮箱"></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button class="btn-define" >注 册</el-button>
                    </div>
                </el-form>
            </div>
            
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return {
                isActive: {
                    "color": "#32D3C3",
                    "border-bottom": "2px solid #32D3C3"
                },
                path: this.$route.path.split('/')[2]
            }
        },
        mounted(){
            console.log(this);
        }
    }
</script>
<style>
    .register-index .register-wrap{
        border: 1px solid #ddd;
        border-radius: 10px;
        width: 30%;
        margin: 10% auto;
    }
    .register-wrap .ms-title {
        padding: 30px 0;
    }
    .register-wrap .ms-title span {
        display: inline-block;
        font-size: 2em;
        margin: 0 10px;
    }
    
    .register-wrap .ms-title span a{
        color: #333;
    }
    .register-wrap .ms-title span a.is-active{
        color: #32D3C3;
        border-bottom: 2px solid #32D3C3;
    }
    .register-wrap .ms-form {
        padding: 40px;
    }
    /* .register-wrap .ms-form .el-input__inner {
        border: 1px solid rgb(191, 216, 217);
        color: #32D3C3;
    } */
    .register-wrap .ms-form .el-input__inner:focus {
        border: 1px solid #32D3C3;
    }
    .btn-define {
        background-color: #32D3C3;
        border-radius: 5px;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        border-color: #f1f1f1;
        box-shadow: none;
        width: 100%;
    }
</style>
