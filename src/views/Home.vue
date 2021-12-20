<template>
  <div>
    <button @click="goAdmin">admin进的</button>
    <button @click="goTeacher">teacher进的</button>
    <button @click="goStudent">student进的</button>

    <br />
    <button @click="A">增</button>
    <button @click="B">删</button>
    <button @click="C">改</button>
    <button @click="D">查</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: this.getToken(),
      headers: {
        token: this.getToken(),
      },
    };
  },
  methods: {
    showMsg(result) {
      if (result.status === 200) {
        const data = result.data;
        if (data.status === 200) {
          this.$message({
            showClose: true,
            message: data.msg,
            type: "success",
            duration: "600",
          });
        } else {
          this.$message({
            showClose: true,
            message: data.msg,
            type: "error",
            duration: "3000",
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: "操作失败，请联系管理员",
          type: "error",
          duration: "3000",
        });
      }
    },
    goAdmin() {
      this.$API.base.goAdmin(this.token).then((res) => {
        this.showMsg(res);
        if (res.data.status == 200) {
          this.$router.push("adminManage");
        }
      });
    },
    goTeacher() {
      this.$API.base.goTeacher(this.token).then((res) => {
        this.showMsg(res);
        if (res.data.status == 200) {
          this.$router.push("teacherManage");
        }
      });
    },
    goStudent() {
      this.$API.base.goStudent(this.token).then((res) => {
        this.showMsg(res);
        if (res.data.status == 200) {
          this.$router.push("studentManage");
        }
      });
    },

    // 增删改查
    A() {
      this.$API.base.goInsert(this.token).then((res) => {
        this.showMsg(res);
      });
    },
    B() {
      this.$API.base.goDelete(this.token).then((res) => {
        this.showMsg(res);
      });
    },
    C() {
      this.$API.base.goUpdate(this.token).then((res) => {
        this.showMsg(res);
      });
    },
    D() {
      this.$API.base.goSelect(this.token).then((res) => {
        this.showMsg(res);
      });
    },
  },
};
</script>

<style>
</style>