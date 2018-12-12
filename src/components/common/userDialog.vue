<template>
    <div class="login">
        <el-dialog title="登录" :visible.sync="dialogLoginVisible">
            <el-form :model="form">
                <el-form-item label="用户名">
                    <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogLoginVisible = false">登录</el-button>
            </div>
        </el-dialog>

         <el-dialog title="注册" :visible.sync="dialogRegisterVisible">
            <el-form :model="form">
                <el-form-item label="用户名" >
                    <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="密码" >
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="form.confirmPwd"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogRegisterVisible = false">注册</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
      /*   props: {
            dialogRegisterVisible: Boolean,
            default:false
        }, */
        data(){
            return{
                form: {
                    name: '',
                    password: '',
                    confirmPwd:''
                },
                props: [dialogRegisterVisible,dialogLoginVisible]
            }
        }
    }
</script>