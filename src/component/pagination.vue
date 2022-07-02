<template>
<section class="page">
  <!--     -->
  <el-pagination
  background
     @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 50]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalCount"
    style="text-align: center"
  >
  </el-pagination>
</section>

</template>

<script>
export default {
  name: "Pagination",
  props:["currentPage","pageSize","totalCount"],
  data() {
    return {
      schArr: [], // 当前页面显示数据条数
      articleList: [], //完整的数据源
      // currentPage: 1, //默认第一页
      pagesize: 10, //每页默认显示10条数据
      total: "", // 总共有N条数据
    };
  },
  methods: {
    // getPageData() {
   	//   let start = (this.currentPage - 1) * this.pagesize;
    //   let end = start + this.pagesize;
    //   this.schArr = this.articleList.slice(start, end);
    // },
    // //  每页显示多少条数据
    handleSizeChange(val) {
      // this.pagesize = val;
      // this.getPageData();
      // console.log(`每页 ${val} 条`);
       this.$emit('handleChangeSize',val)
    },
    handleCurrentChange(val) {
      let maxPage = Math.ceil(this.totalCount/ this.pageSize); //最大页面
      if(val > maxPage) {
        val = maxPage;
      }
      this.$emit('handleChangeCurrentPage',val)
      this.jumpPage = ''
      // this.currentPage = val;
      // this.getPageData();
      // console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
.page {
  margin-bottom: 100px ;
}
.el-pagination {
  margin: 25px;
}
</style>
