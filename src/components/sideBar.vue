<template>
  <section>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#424f63"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="this.$store.state.isCollapse"
      :unique-opened="true"
    >
      <template v-for="(item,index) in $router.options.routes">
        <el-menu-item
          :key="index"
          :index="item.children[0].path"
          v-if="!item.hidden&&item.children.length ==1"
        >
          <i :class="item.iconCls"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
        <el-submenu :key="index" :index="index+''" v-if="!item.hidden&&item.children.length >1">
          <template slot="title">
            <i :class="item.iconCls"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
            <i :class="child.iconCls"></i>
            <span slot="title">{{child.name}}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: ""
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
    this.isCollapse = this.$store.state.isCollapse;
  }
};
</script>
<style scoped>
section {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-width: 200px;
}
.el-menu-vertical-demo {
  height: 100%;
  background-color: "#545c64";
  /* text-color: "#fff";
  active-text-color: "#ffd04b"; */
}
</style>