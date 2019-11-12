<template>
  <section>
    <el-dialog :title="title" :visible="dialogVisible" :width="width" center :before-close="cancer">
      <el-form :label-position="labelPosition" label-width="80px" :model="formData">
        <template v-for="colConfig in colConfigs">
          <el-form-item :key="colConfig[0]" v-bind="colConfig">
            <el-input :value="formData[colConfig.prop]"></el-input>
          </el-form-item>
        </template>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancer">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: () => {}
    },
    // 表头
    colConfigs: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: () => []
    }
  },
  data() {
    return {
      labelPosition: "left"
    };
  },
  methods: {
    cancer() {
      this.$parent.dialogVisible = false;
    },

    submit() {
      this.$parent.submit();
    }
  },
  mounted() {}
};
</script>

