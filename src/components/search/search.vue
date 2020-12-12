<template>
    <div class="search" style="padding-bottom: 9rem;padding-top: 5rem;">
        <div class="container">
            <div class="row">
                <div class="item__empty" v-if="resultSearch.length == 0">
                    <p>Không có kết quả nào cả</p>
                </div>
                <div  class="card m-4 " style="width: 200px; margin: 0 auto!important; height: min-content;" v-for="(item,index) in resultSearch" :key="index">
                    <img class="card-img-top" :src="item.hinhAnh" alt="Card image cap" height="50%">     
                    <div class="card-body">
                    <h5 class="card-title">{{item.tenPhim}}</h5>
                </div>
            </div>
        </div>
        </div>
        
      
    </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
export default {
    name: 'search',
    data() {
        return {
            resultSearch: '',
         
        }
    },
    created() {
       

        let url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?tenPhim=${decodeURI(this.$route.query.q)}`;
      
        const search = new Promise(function(resolve, reject){
        
            axios.get(url,{

            })
           .then(res => resolve(res))
           .catch(err => reject(err))
        })
        .then(res => {
            this.resultSearch = res.data;
        })
        .catch(err => console.log(err))
    },

    beforeUpdate() {
        let url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?tenPhim=${decodeURI(this.$route.query.q)}`;
        axios.get(url,{

            })
        .then(res => {
            this.resultSearch = res.data;
        })
        .catch(err => console.log(err))
    },
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
*{
    margin: 0px;
    padding: 0px;
}

</style>