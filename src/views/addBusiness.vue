<template>
  <section>
    <div @click="back">返回</div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
