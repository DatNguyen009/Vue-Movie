<template>
    <div class="container">
        <h4 style="transform: translateY(8rem);color: white;">Đăng ký</h4>
        <el-form :model="ruleForm" status-icon :rules="rules" :ref="ruleForm" label-width="150px" class="demo-ruleForm" style="margin: 0 10rem; padding-top: 10rem;">
            <el-form-item label="Tên đăng nhập" prop="user">
                <el-input type="text" v-model="ruleForm.user" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Họ tên" prop="hoten">
                <el-input type="text" v-model="ruleForm.hoten" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
                <el-input type="text" v-model="ruleForm.email" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="SDT" prop="SDT">
                <el-input type="text" v-model="ruleForm.SDT" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Mã nhóm" prop="maNhom">
                <el-input type="text" v-model="ruleForm.maNhom" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Mật khẩu" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" auto-complete="off"> </el-input>
            </el-form-item>
            <el-form-item label="Xác nhận mật khẩu" prop="confirmPass">
                <el-input type="password" v-model="ruleForm.confirmPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item style="margin-bottom: 0px; padding-bottom: 2rem;">
                <el-button type="primary" @click="Submit(ruleForm)">submit</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        let checkUser = (rules, value, callback) =>{
            if (value === '') {
                callback(new Error('Vui lòng nhập tên đăng nhập'));
            }
            else{
                callback();
            }
        }
        let checkPass = (rules, value, callback) =>{
            if (value === '') {
                callback(new Error('Vui lòng nhập password'));
            }
            else{
                callback();
            }
        }
        let checkConfirmPass = (rules, value, callback) =>{
            if (value === '') {
                callback(new Error('Vui lòng nhập confirm pass'));
            }
            else{
                callback();
            }
        }
        let checkEmail = (rule, value, callback)=>{
            if (value === '') {
                callback(new Error('Vui lòng nhập email'));
            } else {
                callback();
            }
        }
        let checkHoten = (rule, value, callback)=>{
            if (value === '') {
                callback(new Error('Vui lòng nhập họ tên'));
            } else {
                callback();
            }
        }
        let checkSDT = (rule, value, callback)=>{
            if (value === '') {
                callback(new Error('Vui lòng nhập SDT'));
            } else {
                callback();
            }
        }
        return {
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            ruleForm:{
                user: '',
                email:'',
                hoten: '',
                SDT: '',
                maNhom:'',
                pass: '',
                confirmPass: ''
            },
            rules:{
                user:[
                    {validator: checkUser, trigger: 'change'}
                ],
                pass:[
                    {validator: checkPass, trigger: 'change'}
                ],
                confirmPass: [
                    {validator: checkConfirmPass, trigger: 'change'}
                ],
                email: [
                    {validator: checkEmail, trigger: 'change'}
                ],
                hoten: [
                    {validator: checkHoten, trigger: 'change'}
                ],
                SDT: [
                    {validator: checkSDT, trigger: 'change'}
                ]
            }
        }
    },

    methods: {
        Submit(ruleForm){
            this.$refs[ruleForm].validate((valid)=>{
                if (valid) {
                    axios.post(this.url, {
                        taiKhoan: ruleForm.user,
                        matKhau: ruleForm.pass,
                        email: ruleForm.email,
                        soDT: ruleForm.SDT,
                        hoTen: ruleForm.hoten,
                        maNhom: ruleForm.maNhom,
                    })
                    .then(res => {
                        this.$notify({
                            title: 'Thành công',
                            message: 'Đăng ký thành công',
                            type: 'success',
                            position: 'top-left'
                        });
                        setTimeout(() => {
                            location.href = '/#/login';
                        }, 2000);
                    })
                } else {
                    return false;
                }
            })
        }
    },
}
</script>

<style>

</style>