<template>
  <section class="app-main">
    <b>{{$route.name}}</b>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    }
  },
  data() {
    return {
      tit: ""
    };
  },

  mounted() {
  }
};
</script>
<style scoped>
.app-main {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>