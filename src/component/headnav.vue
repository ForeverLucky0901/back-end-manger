<template>
  <!-- <el-container> -->
  <el-header>
    <div class="cover">
      <el-image
        style="width: 50px; height: 50px"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
      <span class="usename">佳欣</span>
    </div>
    <div class="set">
      <el-dropdown>
        <i class="el-icon-switch-button"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "headnav",
};
</script>

<style scoped lang="less">
/* 头部导航 */
.el-header {
  background-color: #b3c0d1;
  color: #333;
  font-size: 20px;
  display: flex;
  flex-direction: row-reverse;
}
/* 设置icon大小 */
.el-icon-switch-button {
  font-size: 36px;
  margin-top: 13px;
}
.cover {
  width: 80px;
  position: relative;
  .usename {
    display: inline-block;
    position: absolute;
    left:50%;    
    top: 50%;
    transform: translate(-50%,-50%);
  }
}
.el-image {
  width: 60px;
  border-radius: 50%;
  margin: 5px;
}
</style>
