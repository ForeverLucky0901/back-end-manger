<template>
  <div id="app">
    <keep-alive v-if="$route.meta.isKeepAlive">
      <router-view />
    </keep-alive>
    <router-view v-else/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
