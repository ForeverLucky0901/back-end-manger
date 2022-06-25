<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="menuname">文章管理</div>

    <!-- 搜索筛选 -->
    <el-form :inline="true" class="artcle-search">
      <el-form-item label="搜索：">
        <el-input
          size="small"
          v-model="searchForm.title"
          placeholder="输入文章标题"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          size="small"
          v-model="searchForm.classCate"
          placeholder="输入文章分类"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          size="small"
          v-model="searchForm.author"
          placeholder="输入文章作者"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          size="small"
          type="primary"
          icon="el-icon-search"
          @click="search"
          >搜索</el-button
        >
        <el-button
          size="small"
          type="primary"
          icon="el-icon-plus"
          @click="handleClick('添加')"
          >添加</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="artData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" fixed> </el-table-column>
      <el-table-column prop="title" label="标题" width="180" fixed>
      </el-table-column>
      <el-table-column prop="classCate" label="分类" width="100">
      </el-table-column>
      <el-table-column prop="author" label="作者" width="100">
      </el-table-column>
      <el-table-column prop="createTime" label="创作时间" width="180">
      </el-table-column>
      <el-table-column prop="cover" label="封面" width="200"> </el-table-column>
      <el-table-column prop="url" label="链接" width="200"> </el-table-column>
      <el-table-column prop="content" label="内容" show-overflow-tooltip width="200">
      </el-table-column>
      <el-table-column prop="tag" label="标签" width="180">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.tag }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="readNum" label="阅读" width="60">
      </el-table-column>
      <el-table-column prop="likeNum" label="喜欢" width="60">
      </el-table-column>
      <el-table-column prop="keepNum" label="收藏" width="60">
      </el-table-column>
      <el-table-column prop="introduce" label="说明" width="160">
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="230">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleLook(scope.row)">查看</el-button>
          <el-button size="mini" @click="handleClick('编辑', scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Artcle",
  computed: {
    artData: {
      get() {
        return this.$store.state.artData;
      },
      set(v) {
        this.$store.state.artData = v;
      },
    },
  },
  data() {
    return {
      searchForm: {
        title: "",
        author: "",
        classCate: "",
      },
      artForm: {
        title: "",
        author: "",
        createTime: "",
        classCate: "",
        readNum: "",
        likeNum: "",
        keepNum: "",
        cover: "",
        url: "",
        content: "",
        introduce: "",
        tag: [],
      },
      dialogVisible: false,
      title: "添加",
    };
  },

  methods: {
    search() {
      // 搜索
    },
    handleClick(title, row) {
      // 点击跳转路由携带了添加还是编辑；如果是编辑的话把待编辑的数据存入vuex中，在编辑页面取出来
      this.$router.push({
        path: "/artcle/artEdit",
        name: "文章编辑",
        params: {
          title,
        },
      });
      if ( row ) {
         this.$store.commit('editArtData',row)
      }
    },
    handleLook( row) {
       this.$router.push({
        path: "/artcle/artDetail",
        query: {
          id: row.id
        },
      });
      // 把查看的文章存到vuex中
      //  this.$store.commit('editArtData',row)
    },
    handleEdit(title, row) {
      // 编辑
      this.dialogVisible = true;
      this.artForm = row;
    },
    handleDelete(row) {
      // 删除
      this.$confirm("确定删除吗？", "信息", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let index = this.artData.findIndex((item) => item.id === row.id);
          this.artData.splice(index, 1);
          this.$store.commit("editCateData", this.artData);
          this.$message({
            type: "Success",
            message: " 删除成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消删除",
          });
        });
    },
    // closeDialog() {
    //   this.dialogVisible = false;
    //   this.artForm = {};
    // },
    // submitForm(artForm) {
    //   this.dialogVisible = false;
    //   this.$refs[artForm].validate((valid) => {
    //     if (this.title === "添加") {
    //       this.artForm.id = nanoid(5);
    //       this.artForm.date = new Date().toLocaleString();
    //       // console.log(this.artForm, "添加前完整的数据");
    //       this.$store.commit("addCateData", this.artForm);
    //       // console.log("添加完成");
    //     } else if (this.title === "编辑") {
    //       console.log(artData);
    //       let index = this.artData.findIndex((item) => item.id === this.id);
    //       this.artData.splice(index, 1, this.artForm);
    //       this.$store.commit("editCateData", this.artData);
    //     }
    //   });
    // },
  },
};
</script>

<style></style>
