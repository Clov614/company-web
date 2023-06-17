<template>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="内容" prop="content"></el-table-column>
    </el-table>
</template>
<script>
import request from '@/api/request';

export default {
  name : 'TheLists',
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    // 在这里可以从后台数据库获取数据，并将其赋值给tableData
    // 示例数据
    // this.tableData = [
    //   { id:"1",title: "标题1", content: "内容1", token: "sha-token-1" },
    //   { title: "标题2", content: "内容2", token: "sha-token-2" },
    //   { title: "标题3", content: "内容3", token: "sha-token-3" },
    //   // ...
    // ];
  },
  async getNoticeList(){
    const notice_list = (await request.get("http://localhost:9000/api/notice/getNoticeList")).data.data;
    this.tableData = notice_list;
    console.log(notice_list);
  }
};
</script>