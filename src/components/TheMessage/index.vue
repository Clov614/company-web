<template>
    <div class="container">
      <el-container>
    <el-header align="center">Header</el-header>
    <el-main>
      <el-input class="input" v-model="input" placeholder="请输入评论内容" height="100"></el-input>
      <el-button class="button" type="primary" @click="submitData">提交</el-button>
      <el-table :data="comments" stripe style="width: 100%" align="center">
        <el-table-column prop="user" label="用户" width="180" ></el-table-column>
        <el-table-column prop="comment" label="评论" width="180" align="center"></el-table-column>
      </el-table>
    </el-main>
    <el-footer align="center">Footer</el-footer>
  </el-container>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name:"TheMessage",
    data() {
      return {
        input: '',
        comments: []
      }
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        // 获取评论数据
        axios.get('/api/comments')
          .then(res => {
            this.comments = res.data;
          })
          .catch(err => {
            console.log(err);
          });
      },
      submitData() {
        // 提交评论数据
        axios.post('/api/comments', { comment: this.input })
          .then(() => {
            this.input = '';
            this.fetchData();
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .input {
    width: 400px;
  }
  .button {
    margin-top: 10px;
  }
  </style>