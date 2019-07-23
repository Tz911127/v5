<template>
  <div>
    <div class="logo">LOGO</div>
    <i @click="together" class="el-icon-s-grid"></i>
    <el-button type="primary" @click="loginOut" style="float:right">退出</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    together() {
      this.$store.commit("change");
    },
    addFun() {
      this.$store.commit("add");
    },
    loginOut() {
      localStorage.removeItem("token");
      this.$router.replace("/login");
    }
  }
};
</script>
<style scoped>
i {
  font-size: 20px;
  cursor: pointer;
  /* line-height: 60px; */
}
template {
  background: #409eff;
}
.el-header {
  padding: 0 !important;
}
.logo {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  width: 200px;
  color: #fff;
  text-align: center;
}
.el-button {
  line-height: 34px;
}
</style>
