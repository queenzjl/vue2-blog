<template>
    <div class="login">
        <el-dialog class="text-center" width="20%" title="" :stretch='true' :close-on-click-modal='false'  :visible.sync="dialogLoginVisible">
                 
            <el-tabs style="width:80%;margin:0 auto;" v-model="activeName" class="text-center">
                <el-tab-pane label="登录"  name="first">
                    <el-form :model="loginForm" ref="loginForm" :rules = "rules">
                        <el-form-item prop="name">
                            <el-input v-model="loginForm.name" placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item style="margin-bottom:0" prop="password">
                            <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
                        </el-form-item>
                        <el-form-item style="text-align:right">
                            <span>忘记密码</span>
                        </el-form-item>
                        <el-form-item style="margin:0; color:red;">
                            <span>{{loginErrMsg}}</span>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width: 100%" type="primary" :disabled="isLoginDisable" @click="submitLogin('loginForm')">登录</el-button>
                        </el-form-item>
                        
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second">
                    <el-form :model="form" :rules="rules" ref="form">
                        <el-form-item prop="name">
                            <el-input v-model="form.name" placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
                        </el-form-item>
                        <el-form-item prop="confirmPwd">
                            <el-input v-model="form.confirmPwd" type="password" placeholder="确认密码"></el-input>
                        </el-form-item>
                        <el-form-item style="margin:0; color:red;">
                            <span>{{errMsg}}</span>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width: 100%" type="primary" :disabled="isDisable" @click="submitRegister('form')">注册</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
       
        </el-dialog>
         
    </div>
</template>
<script>
    import axios from 'axios';

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
                errMsg: '',
                loginErrMsg: '',
                loginForm: {
                    name: '',
                    password: ''
                },
                form: {
                    name: '',
                    password: '',
                    confirmPwd:''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
                    ],
                    confirmPwd: [
                        { required: true, message: '请输入确认密码', trigger: 'blur' }
                    ]
                }
            }
        },
        computed: {
            isDisable: function () {
                this.errMsg = '';
                if(!this.form.name || !this.form.password || !this.form.confirmPwd){
                   
                    return true;
                }else if(this.$refs.form){
                    this.$refs.form.validate( (valid) => {
                        if(valid){
                            return false;
                        }
                        
                        return true;
                    })
                }
                
            },
            isLoginDisable: function () {
                this.errMsg = '';
                if(!this.loginForm.name || !this.loginForm.password){
                   
                    return true;
                }else if(this.$refs.loginForm){
                    this.$refs.loginForm.validate( (valid) => {
                        if(valid){
                            return false;
                        }
                        
                        return true;
                    })
                }
                
            }
        },
        methods:{
            submitRegister(form){ 
                let _this = this;
                this.$refs[form].validate( (valid) => {
                    if(valid){
                        // this.dialogLoginVisible = false;
                        const loading = this.$loading({
                            lock: true,
                            text: '正在提交...',
                            spinner: 'el-icon-loading',
                            background: 'rgba(0, 0, 0, 0.7)'
                        });

                        axios.post('/user/addUser', this.form).then( res => {
                            let data = res.data;
                            if(data.code == 0){
                                //成功

                                setTimeout(function(){
                                    loading.close();
                        
                                    // this.$message('注册成功，请重新登录！');
                                    _this.$elementMessage('注册成功，请重新登录！', 'primary');

                                    _this.$refs[form].resetFields();

                                    _this.activeName = 'first';
                                }, 500)
                                

                            }else{
                                this.errMsg = data.message;
                                loading.close();
                            }
                        })
                    }
                })
            },
            submitLogin(form){
                let _this = this;
                
                this.$refs[form].validate( (valid) => {
                    if(valid){
                        const loading = this.$loading({
                            lock: true,
                            text: '正在登录...',
                            spinner: 'el-icon-loading',
                            background: 'rgba(0, 0, 0, 0.7)'
                        });

                        let name = _this.loginForm.name;
                        let password = _this.loginForm.password;
                        let url = '/user/login?name=' + name + '&password=' + password
                       
                        axios.get(url).then( (res) => {
                            let data = res.data;
                            if(data.code == 0){
                                //登录成功
                                _this.$message('登录成功！');

                                _this.isLoginDisable = false;

                                _this.$refs[loginForm].resetFields();

                                location.reload();
                            }else{
                                this.loginErrMsg = data.message;
                                loading.close();
                            }
                        })
                        
                        
                    }
                })
            }
        }
    }
</script>

<style>
    .el-tabs__header {
        margin: 0 0 20px;
    }
    .el-tabs__header .el-tabs__item {
        font-size: 24px;
    }
</style>
