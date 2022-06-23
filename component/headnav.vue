<template>
  <!-- <el-container> -->
  <el-header style="text-align: right; font-size: 20px">
    <el-dropdown>
      <i class="el-icon-setting"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    头像插入位置
    <!-- 这个封装有问题，可以放弃还原一下试试 -->
    <!-- <img src="" alt="头像显示" /> -->
    <span>王小虎</span>
  </el-header>
  <!-- </el-container> -->
</template>

<script>
export default {
  name: "headnav",
};
</script>

<style scoped>
/* 头部导航 */
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  font-size: 24px;
}
/* 设置icon */
.el-icon-setting {
  font-size: 24px;
  margin-right: 15px;
}
</style>
