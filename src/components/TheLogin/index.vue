<template>
  <div id="loginPage">
    <h1 id="the-login-h1">后台登录</h1>
    <el-form ref="form" :model="sign_form" label-width="80px" class="login-form">
      <el-form-item label="用户名">
        <el-input v-model="sign_form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="sign_form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="onRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>


// 导入request (axios)
import request from '@/api/request.js';
export default {
  name: "TheLogin",
  data() {
    return {
      sign_form: {
        username: '',
        password: ''
      },
      // auth 回调凭证
      auth: '',
      // 状态
      status: 0,
    }
  },
  methods: {
    async onSubmit() {
      //写入url
      await request.post('/login_sign')
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    },
    async onRegister() {
      //写入url
      await request.post('/regist_sign')
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
<style scoped> 
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#the-login-h1 {
  margin-top: 10%;
}
</style>