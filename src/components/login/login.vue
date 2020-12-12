<template>
    <div class="container">
        <h4 class="text-center mb-5 ml-5 " style="    transform: translateY(7rem);color: white;">Đăng nhập</h4>
        <el-form :model="ruleForm" status-icon :rules="rules" :ref="ruleForm" label-width="120px" class="demo-ruleForm" style="margin: 0 15rem; padding-bottom: 5.7rem; padding-top: 7rem;" >

            <el-form-item label="Tên đăng nhập" prop="user" >
                <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="Mật khẩu" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" @keyup.enter="Submit(ruleForm)" autocomplete="off" ></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="Submit(ruleForm)">Submit</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

export default {
    data() {
        var checkUser = (rule, value, callback)=>{
            if (value === '') {
                callback(new Error('Vui long nhap ten dang nhap'));
            }
            else{
                callback();
               
            }

        }
        var checkPass = (rule, value, callback)=>{
            if (value === '') {
                callback(new Error('Vui long nhap mat khau'));
            }
            else{
                callback();
            }
        }
        return {
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            ruleForm:{
                user: '',
                pass: '',
            },
            rules:{
                user:[
                    { validator: checkUser, trigger: 'change' }
                ],
                pass: [
                    {validator: checkPass, trigger: 'change'}
                ]
            }

        }
    },

    methods: {
        Submit(ruleForm){
            this.$refs[ruleForm].validate((valid) => {
                if (valid) {
                    axios.post(this.url, {
                        taikhoan: ruleForm.user,
                        matkhau: ruleForm.pass
                    })
                    .then(res => {
                        this.$notify({
                            title: 'Thành công',
                            message: 'Đăng nhập thành công',
                            type: 'success',
                            position: 'top-left'
                        });
                        localStorage.setItem('login_client','success');
                        location.href = "/#/home";
                    })
                    .catch(err => {
                        if (err) {
                            this.$notify.error({
                                title: 'Thất bại',
                                message: 'Đăng nhập thất bại',
                                position: 'top-right'
                            })
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
</style>