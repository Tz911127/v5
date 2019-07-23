<template>
  <section>
    <TableData :data="data" :col-configs="colConfigs" :options="options" :total="total" />
    <Dialog :dialogVisible="dialogVisible" :formData="formData" :title="title" :colConfigs="colConfigs"/>
  </section>
</template>
<script>
import TableData from "../components/tableData";
import Dialog from "../components/dialog";
export default {
  components: {
    TableData,
    Dialog
  },

  data() {
    this.colConfigs = [
      { prop: "ta", label: "键" },
      { prop: "sk", label: "键名" },
      { prop: "pa", label: "键值" },
      { prop: "pom", label: "类型" }
    ];
    this.options = [{ label: "删除", type: "danger" }];
    return {
      data: [
        {
          ta: "ta",
          sk: "sk",
          pa: "pa",
          pom: "pom"
        },
        {
          ta: "ss",
          sk: "qq",
          pa: "ss",
          pom: "zz"
        }
      ],
      total: 6,
      dialogVisible: false,
      formData: {},
      title: "title"
    };
  },
  methods: {
    handleButton(index, row) {
      this.formData = row;
      this.dialogVisible = true;
      
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