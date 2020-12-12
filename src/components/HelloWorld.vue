<template>
  <div class="container">
    <div class="slider">
      <el-carousel indicator-position="outside" height="476px" >
        <el-carousel-item v-for="item in listbanner" :key="item">
          <img :src="item" style="width:100%;">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <div class="row">
        <div  class="card m-4 " style="width: 200px; margin: 0 auto!important; height: min-content;border-radius: 20px;" v-for="(item,index) in list" :key="index">
            <router-link :to="{name: 'detail' , params: {maPhim: item.maPhim}}">
              <img class="card-img-top" :src="item.hinhAnh" alt="Card image cap" height="50%" style="border-radius: 20px;">     
            </router-link>
            <!-- <div class="card-body">
              <h5 class="card-title">{{item.tenPhim}}</h5>
            </div> -->
            
          </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
import ElementUI from 'element-ui'
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI);
export default {
  name: "HelloWorld",
  
  data() {
    return {
      list: {},
      listbanner: [
        'https://assets.glxplay.io/static/images/hoa-cua-qu-poster_banner_landscape_21x9_2048x878_3x.jpg',
        'https://assets.glxplay.io/static/images/jungle-poster_banner_landscape_21x9_2048x878_3x.jpg',
        'https://assets.glxplay.io/static/images/sicario--day-of-the-soldado-poster1_banner_landscape_21x9_2048x878_3x.jpg',
      ],
    };
   
  },

 
  created() {
    const listdata = new Promise(function (resolve, reject) {
        axios.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim`,{

        })
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err);
        })
    })
    .then(data => {
        this.list = data;
    })
    .catch(err => {
      console.log(err);
    })
   
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
.main {
  display: flex;
  justify-content: center;
}
.main li {
  list-style: none;
  padding-left: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
