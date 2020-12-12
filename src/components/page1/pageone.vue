<template>
  <div class="container">
    <div class="row" style="padding-top: 5rem;">
      <div  class="card m-4 " style="width: 200px; margin: 0 auto!important; height: min-content;" v-for="(item,index) in listFilm.items" :key="index">

        <img class="card-img-top" :src="item.hinhAnh" alt="Card image cap" height="50%"> 

        <div class="card-body">
          <router-link :to="{name:'detail', params: {maPhim: item.maPhim}}" style="text-decoration: none!important;color: black;">
            <h5 class="card-title">{{item.tenPhim}}</h5>
          </router-link>
          
        </div>

      </div>
    </div>
    <el-pagination background layout="prev, pager, next" :total="parseInt(totalPages)-10" @current-change="handleCurrentChange"></el-pagination>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

export default {
  data() {
    return {
      currentPage: 1,
      elementPage: 15,
      listFilm: {},
      totalPages: 0
    }
  },

  created() {
    axios.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?soTrang=${this.currentPage}&soPhanTuTrenTrang=${this.elementPage}`,{

    })
    .then(res => {
      this.listFilm = res.data;
      this.totalPages = `${this.listFilm.totalPages}0`;
    })
    .catch(err => console.log(err))
    
  },
  methods: {
    handleCurrentChange(val){
      axios.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?soTrang=${val}&soPhanTuTrenTrang=${this.elementPage}`)
      .then(res => {
          this.listFilm = res.data;
      })
      .catch()
    }
  },

}
</script>

<style>
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
</style>