<template>
  <div class="container">
    <div class="login">
      <h3>管理员登录</h3>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
      <p class="welcome">欢迎登陆接入平台</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "admin",
        password: "admin123",
      },
    };
  },
  methods: {
    onSubmit() {
      let { name, password } = this.$store.state.account;
      if (name === this.form.name && password === this.form.password) {
        this.$router.push("/home");
      } else {
        this.$message.error("账号密码错了哦");
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  width: 320px;
  height: 280px;
  box-shadow: -15px 15px 15px rgba(6 17 47/70%);
  padding: 100px 60px 40px 40px;
  background: #000;
}
h3 {
  font-size: 26px;
  color: aliceblue;
  font-weight: 500;
  margin-top: -30px;
}
.el-form-item__label {
  font-size: 26px;
  color: cornsilk;
}
.welcome {
  margin-top: 60px;
}
</style>
