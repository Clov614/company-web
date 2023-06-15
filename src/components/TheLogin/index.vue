<template> 
  <el-form ref="form" :model="form" label-width="80px" class="login-form">
    <el-form-item label="用户名"> 
      <el-input v-model="form.username"></el-input> 
    </el-form-item>
    <el-form-item label="密码"> 
      <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item> 
  <el-button type="primary" @click="onSubmit">登录</el-button> 
  <el-button @click="onRegister">注册</el-button>
</el-form-item> 
  </el-form>
</template>

<script>
 import axios from 'axios';
export default {
  name: "TheLogin",
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      axios.post('', this.form)//写入url
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    },
    onRegister() {
      axios.post('', this.form)//写入url
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>
<style> 
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>