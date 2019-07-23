<template>
  <section>
    <TableData :data="data" :col-configs="colConfigs" :total="total" :options="options" />
    <Dialog
      :dialogVisible="dialogVisible"
      :formData="formData"
      :title="title"
      :colConfigs="colConfigs"
    />
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
      { prop: "date", label: "版本名称" },
      { prop: "name", label: "文件类型" },
      { prop: "status", label: "大小" },
      { prop: "number", label: "上传时间" }
    ];
    this.options = [
      {
        label: "编辑",
        type: "danger"
      },
      { label: "下载", type: "primary" },
      { label: "查看版本功能" }
    ];

    return {
      // 表格内容
      data: [
        {
          num: 17,
          date: "2016-05-02",
          name: "王小虎1",
          title: "上海市普陀区金沙江路 1518 弄",
          author: "李四1",
          number: 1321,
          readnumber: 4321432,
          status: "成功"
        },
        {
          num: 18,
          date: "2016-34-02",
          name: "gs",
          title: "上海市普陀区金沙江路 1518 弄",
          author: "dd",
          number: "qwe",
          readnumber: 12,
          status: "成功"
        }
      ],

      total: 5,
      dialogVisible: false,
      title: "title",
      formData: {}
    };
  },
  methods: {
    handleSelectionChange() {},
    handleButton(index, row) {
      console.log(index, row);
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