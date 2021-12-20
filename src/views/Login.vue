<template>
  <div class="login_box">
    <h2>登录</h2>
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="40px"
      class="demo-ruleForm"
    >
      <el-form-item label="账户" prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" plain @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        password: "",
        username: "",
      },
      rules: {
        password: [{ validator: validatePassword, trigger: "blur" }],
        username: [{ validator: checkUsername, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$API.login.login(this.ruleForm).then((result) => {
            if (result.status === 200) {
              var data = result.data;
              if (data.status === 200) {
                this.setToken(data.token);
                console.log(data.token);
                this.$message({
                  showClose: true,
                  message: "登录成功",
                  type: "success",
                  duration: "600",
                });
                var jsonUser = JSON.stringify({
                  username: this.ruleForm.username,
                });
                sessionStorage.setItem("user", jsonUser);
                this.ruleForm.username = "";
                this.ruleForm.password = "";
                this.$router.push("home");
              } else {
                this.$message({
                  showClose: true,
                  message: "登录失败，原因: " + data.msg,
                  type: "error",
                  duration: "3000",
                });
              }
            } else {
              this.$message({
                showClose: true,
                message: "登录失败，请联系管理员",
                type: "error",
                duration: "3000",
              });
            }
          });
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login_box {
  width: 100%;
}
h2 {
  margin-left: 20px;
  margin-top: 50px;
  text-align: center;
}

.el-form {
  width: 25%;
  margin: 20px auto;
  position: relative;
  .el-form-item {
    width: 100%;
  }
}
.el-input {
  width: 100%;
}
.el-button {
  width: 100%;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>