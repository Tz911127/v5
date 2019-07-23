<template>
  <section>
    <!--  :height="tableHeight"   :border="border" -->
    <el-table
      ref="multipleTable"
      :data="data"
      :foldList="foldList"
      :row-style="toggleDisplayTr"
      style="width: 100%;"
      :header-cell-style="headercellstyle"
      class-name="small-padding fixed-width"
      highlight-current-row
      _highlight:
      true
    >
      <template v-for="colConfig in colConfigs">
        <el-table-column sortable :key="colConfig[0]" show-overflow-tooltip v-bind="colConfig"></el-table-column>
      </template>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            v-for="(item,index) in options"
            size="mini"
            :key="index"
            :type="item.type"
            @click="handleButton(index,scope.row)"
          >{{item.label}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Dialog />
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </section>
</template>
<script>
export default {
  props: {
    // 表头
    colConfigs: {
      type: Array,
      default: () => []
    },
    // 表格数据
    data: {
      type: Array,
      default: () => []
    },

    // 表头的样式
    headercellstyle: {
      type: Object,
      default: () => {}
    },
    // 树形表格折叠数组
    foldList: {
      type: Array,
      default: () => []
    },
    // 树形表格方法
    toggleDisplayTr: {
      type: Function,
      default: () => {}
    },
    //操作
    options: {
      type: Array,
      default: () => []
    },
    //翻页
    total: {
      type: Number,
      default: () => {}
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 当选择项发生变化时会触发该事件
    handleSelectionChange(val) {
      this.$emit("handleSelectionChange", val);
      console.log(val);
    },
    // 点击某一行触发
    handlRowclick(row, event, column) {
      this.$emit("handlRowclick", row, event, column);
      console.log(row);
    },
    handleButton(index, row) {
      this.$parent.handleButton(index, row);
    }
  },
  mounted() {}
};
</script>
