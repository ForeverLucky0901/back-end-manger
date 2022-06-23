<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="menuname">用户管理</div>
    <!-- 搜索筛选 -->
    <el-form :inline="true" class="user-search">
      <el-form-item label="搜索：">
        <el-input
          size="small"
          v-model="searchValue"
          placeholder="输入分类类目"
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
          >添加</el-button
        >
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="cateData" style="width: 100%">
      <el-table-column prop="cateValue" label="类目" width="180">
      </el-table-column>
      <el-table-column prop="date" label="时间" width="180"> </el-table-column>
      <el-table-column prop="createUser" label="创始人" width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleClick('编辑', scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加或者编辑的弹框 -->
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="30%"
      @click="closeDialog"
    >
      <el-form
        ref="cateForm"
        label-width="120"
        :model="cateForm"
        :rules="rules"
      >
        <el-form-item label="类目">
          <el-input
            size="small"
            v-model="cateForm.cateValue"
            placeholder="请输入类目名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="创始人">
          <el-input
            size="small"
            v-model="cateForm.createUser"
            placeholder="请输入创始人名字"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="closeDialog">取 消</el-button>
        <el-button
          type="primary"
          border
          size="small"
          class="title"
          @click="submitForm('cateForm')"
          >保存</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Menu",
  computed: {
    cateData: {
      get() {
        return this.$store.state.cateData;
      },
      set(v) {
        this.$store.state.cateData = v;
      },
    },
  },
  data() {
    return {
      searchValue: "",
      cateForm: {
        cateValue: "",
        createUser: "",
      },
      dialogVisible: false,
      title: "添加",
      rules: {
        cateValue: {
          required: true,
          message: "请输入类目",
          trigger: "blur",
        },
        createUser: {
          required: true,
          message: "请输入创始人",
          trigger: "blur",
        },
      },
    };
  },
  methods: {
    search() {
      // 搜索
    },
    handleClick(title, row) {
      // 点击添加 打开弹框
      this.dialogVisible = true;
      this.title = title;
      if (title === "添加") {
        this.cateForm = {};
      } else if (title === "编辑") {
        let obj = JSON.parse(JSON.stringify(row));
        this.cateForm = obj;
      }
    },
    handleEdit(title, row) {
      // 编辑
      this.dialogVisible = true;
      this.cateForm = row;
    },
    handleDelete(row) {
      // 删除
      this.$confirm("确定删除吗？", "信息", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let index = this.cateData.findIndex((item) => item.id === row.id);
          this.cateData.splice(index, 1);
          this.$store.commit("editCateData", this.cateData);
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
    closeDialog() {
      this.dialogVisible = false;
      this.cateForm = {};
    },
    submitForm(cateForm) {
      this.dialogVisible = false;
      // this.cateForm = "";
      this.$refs[cateForm].validate((valid) => {
        if (this.title === "添加") {
          this.cateForm.id = nanoid(5);
          this.cateForm.date = new Date().toLocaleString();
          console.log(this.cateForm, "添加前完整的数据");
          this.$store.commit("addCateData", this.cateForm);
          console.log("添加完成");
        } else if (this.title === "编辑") {
          console.log(this.title, this);
          let index = this.cateData.findIndex((item) => item.id === this.id);
          this.cateData.splice(index, 1, this.cateForm);
          this.$store.commit("editCateData", this.cateData);
        }
      });
    },
  },
};
</script>

<style>
</style>
