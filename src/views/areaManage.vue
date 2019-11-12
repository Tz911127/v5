<template>
  <section>
    <TableData :data="data" :col-configs="colConfigs" :options="options" :total="total" />
  </section>
</template>
<script>
import TableData from "../components/tableData";
export default {
  components: {
    TableData
  },
  data() {
    this.colConfigs = [
      { prop: "ta", label: "企业代码" },
      { prop: "sk", label: "企业简称" },
      { prop: "pa", label: "账户类型" },
      { prop: "pom", label: "账户状态" }
    ];
    this.options = [{ label: "删除", type: "danger" }];
    return {
      data: [
        {
          ta: "1",
          sk: "2",
          pa: "3",
          pom: "4"
        },
        {
          ta: "5",
          sk: "6",
          pa: "7",
          pom: "8"
        }
      ],
      total: 2
    };
  },
  methods: {
    handleButton(index, row) {
      this.$router.push({ path: "/addBusiness" });
    },
    cancer() {
      this.dialogVisible = false;
    },
    submit() {
      this.dialogVisible = false;
    }
  }
};
</script>
