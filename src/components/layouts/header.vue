<template>
 
    <div class="menu">
     
        <div class="logo">
          <router-link :to="{ name: 'home' }">
            <img src="https://fullstack.edu.vn/assets/images/f8_text_logo.png" alt="logo" />
          </router-link>
        </div>
     
        <div class="menu_list_SP">
          <router-link :to="{ name: 'home' }">
            <p>Trang chủ</p>
          </router-link>
          <router-link :to="{ name: 'phimmoi' }">
            <p>Phim moi</p>
          </router-link>
          <router-link :to="{ name: 'phimle' }">
            <p>Phim le</p>
          </router-link>
        </div>
    
       
        <div class="menu__search">
            <input
              class="form-control form-control-sm mr-3 w-75"
              type="text"
              placeholder="Tên phim"
              v-model="tenPhim"
              @keyup.enter="search(tenPhim)"
            />
            
        </div>
        <div class="login_register" >
          <router-link :to="{name: 'login'}">Đăng nhập</router-link>
          <router-link :to="{name: 'register'}">Đăng ký</router-link>
        </div>
    
    </div>

</template>

<script>
import "../../assets/css/app.css";
export default {
    name: "header",
    data() {
      return {
        tenPhim: "",
        lsLogin: '',
      }
    },

    
   
    methods: {
      search(name){
        location.href = `/#/search?q=${name}`;
        this.tenPhim = " ";
      },
    },
    
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}



.menu {
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: auto;
  background-color: black;
  transform: translateY(-10px);
  z-index: 99;
}



.logo {
  margin-top: 2rem;
}

.logo img {
  width: 100px;
}



.menu_list_SP {
  display: flex;
  padding: 2rem 0 15px 0px;
}

.menu_list_SP a{
  text-decoration: none;
}

.menu_list_SP p {
  font-family: monospace;
  font-size: 15px;
  font-weight: bold;
  color: white;
  padding-right: 15px;
  text-decoration: none;
}
.menu__search {
  padding: 2rem 17px 17px 6rem;
  display: flex;
}

input.form-control.form-control-sm.mr-3.w-75 {
  background-color: black;
  border: 1px solid white;
  width: 25rem !important;
  color: white;
  padding-left: 10px;
}

.login_register {
  position: relative;
  padding-top: 2rem;
  max-width: 300px;
}

.login_register a {
  padding: 7px;
  color: white;
  border-radius: 5px;
  border: 2px solid white;
  text-decoration: none !important;
  max-width: 150px;
}

.login_register a:hover {
  color: white;
  background-color: pink;
}

::placeholder{
  color: white;
}

</style>
