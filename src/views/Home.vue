<template>
  <el-container>
    <!-- 左侧导航栏 -->
    <el-aside class="index-con">
      <LeftNav />
    </el-aside>
    <!-- 右侧主体部分 -->
    <el-container class="main-con">
      <!-- 右侧头部导航 -->
      <el-header>
        <HeadNav />
      </el-header>
      <!-- 右侧主体部分 -->
      <el-main id="top">
        <router-view />
        <!-- 返回顶部的按钮 -->
        <el-backtop target="#top" :visibility-height="100"></el-backtop>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftNav from "../component/leftnav.vue";
import HeadNav from "../component/headnav.vue";

export default {
  components: { LeftNav, HeadNav }
};
</script>

<style scoped>
.el-container {
  height: 100%;
}
/* 左边侧边栏 */
.index-con {
  width: 200px !important;
  color: wheat;
  /* line-height: 620px; */
  background-color: #334157;
}
/* 中间部分主框架 */
.main-con {
  display: flex;
  flex-direction: column;
}

/* 主要内容区域 */
.el-main {
  color: #333;
  text-align: center;
  /* overflow: auto; */
   /* 这里给app一个滚动效果 */
  overflow-y: scroll;
}
</style>
