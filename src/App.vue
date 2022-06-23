<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <keep-alive v-if="$route.meta.iskeepAlive">
      <router-view />
    </keep-alive>
    <router-view velse />
  </div>
</template>
<script>
import {loadEnv} from "vite"
export default {
  mounted(){
    console.log(loadEnv(mode, process.cwd()).VITE_BASEURL)
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
