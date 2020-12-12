<template>
  <div id="app">
    <div class="header_home">
      <Header></Header>
    </div>
    <div class="main_home">
      <router-view> </router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/layouts/header";
import Footer from './components/layouts/footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #181d23;
}
.header_home{
  height: auto;
}
.main_home{
  background: #181d23;
}
</style>
