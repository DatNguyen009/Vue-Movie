<template>
  <div class="admin">
    <HeaderAdmin></HeaderAdmin>
    <router-view></router-view>
  </div>
</template>

<script>
import Axios from 'axios';
import HeaderAdmin from './layouts/headerAdmin.vue';


export default {
    data() {
      return {
       
      }
    },

    components:{
      HeaderAdmin,
    },
  
    
  }
</script>

<style>
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
    .header_home,.footer{
        display: none!important;;
    }
</style>