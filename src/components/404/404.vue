<template>
  <div class="container">
      <div class="notFound">
          <h3>Không tìm thấy trang</h3>
          <router-link :to="{name: 'home'}"><button  class="btn btn-default btn-goHome" >Go back home</button></router-link>
          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .notFound{
        height: 30.1rem;
    }
    h3{
        padding-top: 10rem;
        color: white;
    }
    .btn-goHome{
        color: white; 
        border: 2px solid white; 
    }
</style>