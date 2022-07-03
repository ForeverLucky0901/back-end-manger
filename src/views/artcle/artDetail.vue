<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <div class="menuname">{{ title }}</div> -->
    <div class="content" v-if="this.id">
      <h1 class="title">{{ articleDetails.title }}</h1>
      <p class="info">
        <span><b>发布者：</b>{{ articleDetails.author }}</span>
        <span><b>发布时间：</b>{{ articleDetails.createTime }}</span>
      </p>
      <div v-html="articleDetails.content" class="htmlValue"></div>
  <!-- 返回顶部 -->
      <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    </div>
    <div class="content" v-else>
      <p>暂时没有文章内容</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtDetail",
  data() {
    return {
      title: "查看文章详情",
      articleDetails: {},
      htmlContent: "",
      id: null,
    };
  },
  created() {
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      this.articleDetails = this.$store.state.artData.find(
        (item) => item.id == this.id
      );
    }
  },
};
</script>

<style scoped lang="less">
/* 富文本内容格式 */
.content {
  overflow: auto;
  // text-align: left;
  title {
    font-size: 14px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 18px;
  }
  .info {
    // display: flex;
    span {
      margin-right: 20px;
    }
  }
  .htmlValue {
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
}
</style>
>
