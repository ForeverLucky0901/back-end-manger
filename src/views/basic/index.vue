<template>
  <div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>基础管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="menuname">用户管理</div>
    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="搜索：">
        <el-input
          size="small"
          v-model="formInline.company"
          placeholder="输入公司名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input
          size="small"
          v-model="formInline.phone"
          placeholder="输入手机号码"
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
    <el-table
      :data="tableData"
      v-loading="loading"
      border
      tooltip-effect="dark"
      size="medium"
      style="width: 100%"
    >
      <el-table-column prop="id" label="ID" width="70">
        <template slot-scope="scope">
          <!-- 去掉id前面的0 -->
          <span> {{ scope.row.id.replace(/^[0]+/g, "") }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="company" label="公司" width="150">
      </el-table-column>
      <el-table-column prop="usename" label="用户名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="phone" label="手机号" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="160">
      </el-table-column>
      <el-table-column prop="state" label="状态" width="120">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.state"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
         
          </el-switch>
           {{scope.row.state}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleClick('编辑', scope.row)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="handleDel(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <Pagination
      v-show="tableData.length > 0"
      :currentPage="currentPage"
      :totalCount="totalCount"
      :pageSize="pageSize"
      @handleChangeCurrentPage="handleChangeCurrentPage"
      @handleChangeSize="handleChangeSize"
    />

    <!-- 查看编辑的弹框 -->
    <el-dialog
      :title="title"
      width="30%"
      :visible.sync="editFormVisiable"
      @click="closeDialog"
    >
      <el-form
        label-width="120"
        :model="editForm"
        :rules="rules"
        ref="editForm"
      >
        <el-form-item label="公司" props="company" required>
          <el-input
            size="small"
            v-model="editForm.company"
            auto-complete="off"
            placeholder="请输入公司名称"
          ></el-input>
        </el-form-item>

        <el-form-item label="用户名" props="usename" required>
          <el-input
            size="small"
            v-model="editForm.usename"
            auto-complete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>

        <el-form-item label="地址" props="address" required>
          <el-input
            size="small"
            v-model="editForm.address"
            auto-complete="off"
            placeholder="请输入地址"
          ></el-input>
        </el-form-item>

        <el-form-item label="手机号" props="phone" required>
          <el-input
            size="small"
            v-model="editForm.phone"
            auto-complete="off"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>

        <el-form-item label="性别" props="sex" required>
          <el-select v-model="editForm.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态" props="state" required>
          <el-switch v-model="editForm.state"></el-switch>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="closeDialog">取消</el-button>
        <el-button
          size="small"
          type="primary"
          border
          class="title"
          @click="submitForm('editForm')"
          >保存</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "../../component/pagination.vue";
import {
  getAllUserInfo,
  addUserInfo,
  editUserInfo,
  delUserInfo,
} from "../../request/api";
export default {
  name: "Basic",
  components: {
    Pagination,
  },
  data() {
    return {
      title: "添加", // 默认是添加
      currentPage: 1, //默认第一页
      pageSize: 10, // 每页显示10条数据
      totalCount: null, //总条数
      editFormVisiable: false, // 弹框默认关闭
      loading: true,
      formInline: {
        company: "",
        phone: "",
      },
      editForm: {
        //弹框填写信息
        company: "",
        usename: "",
        address: "",
        phone: "",
        sex: "",
        createTime: "",
        state: false,
      },
      tableData: [],
      rules: {
        company: { required: true, message: "请输入公司名称", trigger: "blur" },
        usename: { required: true, message: "请输入用户名", trigger: "blur" },
        address: { required: true, message: "请输入详细地址", trigger: "blur" },
        phone: {
          required: true,
          message: "请输入手机号码",
          trigger: "blur",
          type: "phone",
        },
        sex: { required: true, message: "请选择性别", trigger: "change" },
        state: { required: true, message: "请选择状态" },
      },
    };
  },
  created() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      // 通过接口获取数据
      getAllUserInfo({
        page: this.currentPage,
        limit: this.pageSize,
        company: this.formInline.company,
        phone: this.formInline.phone,
      }).then((result) => {
        if (result.code === 200) this.loading = false;
        this.tableData = result.data;
        this.totalCount = result.totalCount;
      });
    },
    search() {
      //  非空验证
      if (
        this.formInline.company.trim() === "" &&
        this.formInline.phone.trim()
      ) {
        this.getTableList(this.formInline.company, this.formInline.phone);
      }
    },
    handleChangeCurrentPage(val) {
      // 页码变化
      this.currentPage = val;
      this.getTableList(this.currentPage, this.pageSize);
    },
    handleChangeSize(val) {
      // 每页显示条数变化
      this.pageSize = val;
      this.getTableList(this.pageSize, this.currentPage);
    },
    handleClick(title, row) {
      // 点击查看该条数据
      this.editFormVisiable = true;
      this.title = title;
      if (title === "添加") {
        this.editForm = {};
      } else if (title === "编辑") {
        this.editForm = JSON.parse(JSON.stringify(row));
      }
    },
    handleDel(row) {
      // 删除信息
      this.$confirm("确定要删除吗?", "信息", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delUserInfo({ id: row.id }).then((res) => {
            if (res.code === 200) {
              // 删除成功
              this.$message({
                type: "Success",
                message: res.mes,
              });
              this.getTableList();
            } else if (res.code === 300) {
              // 删除失败
              this.$message({
                type: "Warning",
                message: res.mes,
              });
            }
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
      // 关闭弹框 清空表单
      this.editFormVisiable = false;
      this.editForm = {};
    },
    submitForm(editForm) {
      // 关闭弹框
      this.editFormVisiable = false;
      this.$refs[editForm].validate((valid) => {
        if (valid) {
          if (this.title === "添加") {
            this.editForm.createTime = new Date().toLocaleString();
            addUserInfo({
              company: this.editForm.company,
              usename: this.editForm.usename,
              address: this.editForm.address,
              phone: this.editForm.phone,
              sex: this.editForm.sex,
              createTime: new Date().toLocaleString(),
              state: this.editForm.state,
            }).then((res) => {
              this.$message({
                type: "Success",
                message: res.mes,
              });
            });
          } else if (this.title === "编辑") {
            // 编辑数据
            editUserInfo({
              id: this.editForm.id,
              company: this.editForm.company,
              usename: this.editForm.usename,
              address: this.editForm.address,
              phone: this.editForm.phone,
              sex: this.editForm.sex,
              createTime: new Date().toLocaleString(),
              state: this.editForm.state,
            }).then((res) => {
              this.$message({
                type: "Success",
                message: res.mes,
              });
            });
          }
          this.getTableList();
        }
      });
    },
  },
};
</script>

<style>
.user-search {
  display: flex;
}
.el-form-item__content {
  display: flex;
}
.el-form-item__label {
  width: 80px;
  text-align: left;
}
.el-switch {
  height: 40px;
}
</style>
