<template>
    <div class="pageDetail" v-loading="loading" style="color: white;">
        <div class="container">
            <div class="pageDetail__infor">
                <div class="row" >
                    <div class="col-sm-4"  slot="error">
                       <div class="infor__image" >
                            <el-image :src="phimDetail.hinhAnh" fit="cover" style="border-radius: 20px;" alt="error">
                                <div slot="error" class="image-slot" style="font-size: 2rem;color: white;">
                                    <i class="el-icon-picture-outline"></i>
                                </div>
                            </el-image>
                       </div>
                        
                    </div>
                    <div class="col-sm-8" style ="color: white; text-align: left; ">
                       <div class="infor__film" style="padding-left: 4rem;">
                            <div class="infor__film--starName" style="display: flex; justify-content: space-between;">
                                <p style="font-weight: bold;font-size: 22px;">{{phimDetail.tenPhim}}</p>
                                <el-rate score-template="{value} points">></el-rate>
                            </div>
                            <p style="font-size: 14px;color: gray;">{{phimDetail.moTa}}</p>
                            <h6 style="font-weight: bold;">Diễn viên</h6>
                            <div class="infor__film--actor d-flex" >
                                <p class="mr-5" style="color: gray;"  v-for="(item,index) in actor" :key="index" >
                                    {{item}}
                                </p>
                            </div>
                           
                       </div>
                    </div>
                </div>
            </div>
            <div class="pageDetail__trailer" >
                <div class="pageDetail__trailer--titel">
                    <h3>Trailer</h3>
                </div>
                <div class="pageDetail__trailer--video" >    
                    <iframe width="644" height="362" :src="phimDetail.trailer" frameborder="0" ></iframe>
                </div>
            </div>
            <div class="pageDetail__description">
                <div class="pageDetail__description--titel">
                    <h3>Mô tả</h3>
                </div>
                <div class="pageDetail__description--content">
                    <p>{{phimDetail.moTa}}</p>
                </div>
            </div>  
            <div class="pageDetail__ManagerSchedule" >
                <div class="col-sm-4">
                    <div class="pageDetail__movieTheater" v-for="(item,index) in listTheater" :key="index" style="border-bottom: 1px solid white; border: 1px solid white;">
                        <div class="pageDetail__movieTheater BHDStar" style="padding-left: 40px; ">
                            <div class="pageDetail__movieTheater--logo "  v-if="item.maHeThongRap == 'BHDStar'" @click="ViewSchedule(item.maHeThongRap)">
                                <el-image :src="item.logo" style="width: 50px; height: 50px"></el-image>
                            </div>
                            <div class="pageDetail__movieTheater--name" v-if="item.maHeThongRap == 'BHDStar'" >
                                <p>{{item.tenHeThongRap}}</p>
                            </div>
                        </div>
                        <div class="pageDetail__movieTheater CGV" >
                            <div class="pageDetail__movieTheater--logo " v-if="item.maHeThongRap == 'CGV'" @click="ViewSchedule(item.maHeThongRap)">
                                <el-image :src="item.logo" style="width: 50px; height: 50px"></el-image>
                            </div>
                            <div class="pageDetail__movieTheater--name" v-if="item.maHeThongRap == 'CGV'">
                                <p>{{item.tenHeThongRap}}</p>
                            </div>
                        </div>
                        <div class="pageDetail__movieTheater CineStar">
                            <div class="pageDetail__movieTheater--logo " v-if="item.maHeThongRap == 'CineStar'" @click="ViewSchedule(item.maHeThongRap)">
                                <el-image :src="item.logo" style="width: 50px; height: 50px"></el-image>
                            </div>
                            <div class="pageDetail__movieTheater--name" v-if="item.maHeThongRap == 'CineStar'">
                                <p>{{item.tenHeThongRap}}</p>
                            </div>
                        </div>
                        <div class="pageDetail__movieTheater Galaxy">
                            <div class="pageDetail__movieTheater--logo " v-if="item.maHeThongRap == 'Galaxy'" @click="ViewSchedule(item.maHeThongRap)">
                                <el-image :src="item.logo" style="width: 50px; height: 50px"></el-image>
                            </div>
                            <div class="pageDetail__movieTheater--name" v-if="item.maHeThongRap == 'Galaxy'">
                                <p>{{item.tenHeThongRap}}</p>
                            </div>
                        </div>
                    
                        <div class="pageDetail__movieTheater LotteCinima">
                            <div class="pageDetail__movieTheater--logo " v-if="item.maHeThongRap == 'LotteCinima'" @click="ViewSchedule(item.maHeThongRap)">
                                <el-image :src="item.logo" style="width: 50px; height: 50px"></el-image>
                            </div>
                            <div class="pageDetail__movieTheater--name" v-if="item.maHeThongRap == 'LotteCinima'">
                                <p>{{item.tenHeThongRap}}</p>
                            </div>
                        </div>
                        
                        <div class="pageDetail__movieTheater MegaGS">
                            <div class="pageDetail__movieTheater--logo " v-if="item.maHeThongRap == 'MegaGS'" @click="ViewSchedule(item.maHeThongRap)">
                                <el-image :src="item.logo" style="width: 50px; height: 50px"></el-image>
                            </div>
                            <div class="pageDetail__movieTheater--name" v-if="item.maHeThongRap == 'MegaGS'">
                                <p>{{item.tenHeThongRap}}</p>
                            </div>
                        </div>  

                    </div>
                </div>
                
                <div class="col-sm-8">
                    <div class="pageDetail__ManagerSchedule--schedule" style="overflow-y: scroll;height: 33rem;border: 1px solid white;margin-top: 0.5rem;" v-if="listSchedule.length != 0">
                        <div class="manager" v-for="(item,index) in  listSchedule" :key="'A'+index" style="border: 1px solid white;" >
                            <div class="nameTheater" >
                                <p >{{item.thongTinRap.tenCumRap}}</p>
                            </div>
                            <div class="price">
                                <p>{{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.giaVe)}}</p>
                            </div>
                            <div class="hour" >
                                <el-button type="default" plain style="color: white; background-color: #181d23;margin: 5px 0;">{{item.ngayChieuGioChieu}}</el-button>
                            </div>
                        </div>
                    </div>
                    <p v-else-if="listSchedule.length == 0">
                        khong co lich chieu phim
                    </p>
                   
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
import Vue from 'vue';
import ElementUI from 'element-ui';
import { Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
export default {
    data() {
        return {
           
            phimDetail: {},
          
            listTheater: {},

            listSchedule: {},
        
            actor: ['dat', 'nguyen', 'thanh'],

            loading: true,  
        }
    },
   
    created() {
       setTimeout(() => {
            const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.$route.params.maPhim}`;
            const listdata = new Promise(function (resolve, reject) {
                axios.get(url,{

                })
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err);
                })
            })
            .then(data => {
                this.phimDetail = data.data;
                return this.phimDetail;
            })
            .catch(err => {
                console.log(err);
            })

            //lay danh sach rap chieu phim

            const ListDataTheater = new Promise(function (resolve, reject) {
            axios.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`)
            .then(res => resolve(res))
            .catch(err => reject(err))
            })
            .then(data => {
                this.listTheater = data.data;
            })
            .catch(err => console.log(err))
       }, 3000);
    },
   

    beforeUpdate(){
        while (this.phimDetail.length !=0) {
            this.loading = false;
            break;
        }
    },
    
    methods: {
        ViewSchedule(idTheater){
            let data = this.phimDetail.lichChieu.filter(function(viewSchedule, index, array){
                return viewSchedule.thongTinRap.maHeThongRap == idTheater;
            })
            this.listSchedule = data;
        }
    },
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
    .time {
        font-size: 13px;
        color: #999;
     
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
    .pageDetail__ManagerSchedule{
        display: flex;
        border: 1px solid black;
        border-radius: 10px;

    }
    .pageDetail__movieTheater{
        margin: 10px 0;
        display: flex;
    }
    .pageDetail__infor{
        padding-top: 7rem;
    }
    .pageDetail__movieTheater--name{
        transform: translate(10px, 10px);
    }
    .pageDetail__ManagerSchedule--schedule::-webkit-scrollbar{
        display: none;
    }
</style>