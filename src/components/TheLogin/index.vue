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
      // token 回调凭证
      token: '',
      // 状态
      status: 0,
    }
  },
  methods: {
    async onSubmit() {
      //写入url
      await request.post('/sign/login', this.sign_form, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          console.log(res.data);
          if (res.data.status == 200) { // 登录成功
            // 将token以及昵称写入session作用域
            console.log(res.data.data);
            sessionStorage.setItem("nick_name", res.data.data.name);
            sessionStorage.setItem("token",res.data.data.token);
            // 触发TheHead监听事件
            this.resetSetItem('watchStorage', res.data.data.name);
            // 跳转后台路由
            this.$router.push('/manager').catch(err =>{err});
          }
          // TODO: 登录不成功情况弹提示框 （status ！= 200）分情况else if 判断
        })
        .catch(err => {
          console.log(err);
        })
    },
    async onRegister() {
      //写入url
      // await request.post('/regist_sign')
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   })

      // TODO 注册逻辑处理 
      const nick_name = sessionStorage.getItem("nick_name");
      console.log(nick_name);
    }
  }
}
</script>
<style scoped> .login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#the-login-h1 {
  margin-top: 10%;
}
</style>