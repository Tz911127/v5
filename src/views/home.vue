<template>
  <div>
    <el-container>
      <el-header>
        <NavBar @handleOpen = 'handleOpen' />
      </el-header>
      <el-container>
        <!-- style="width:auto" -->
        <el-aside style="width:''">
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
   handleOpen(){
     console.log(13)
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
.el-aside {
  /* width: 200px!important */
}
.el-main {
  /* width: auto */
}
.el-aside,
.el-main {
  height: calc(100vh - 60px);
}
</style>