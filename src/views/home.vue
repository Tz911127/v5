<template>
  <div>
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-container>
        <el-aside style="width:auto">
          <SideBar />
        </el-aside>
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AppMain from "../components/appMain";
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
export default {
  components: {
    AppMain,
    NavBar,
    SideBar
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    // console.log(this.$route);
  }
};
</script>
<style scope>
.el-header {
  background: #409eff;
  padding: 0;
}
.el-aside,
.el-main {
  height: calc(100vh - 60px);
}
</style>