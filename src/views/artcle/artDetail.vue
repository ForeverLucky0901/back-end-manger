<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="menuname">{{ title }}</div>
    <div class="content" v-html="htmlContent"></div>
  </div>
</template>

<script>
export default {
  name: "ArtDetail",
  data() {
    return {
      title: "查看文章详情",
      htmlContent: "",
      id: null,
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.htmlContent = this.$store.state.artData.find(
      (item) => item.id == this.id
    ).content;
  },
};
</script>

<style scoped>
</style>>

