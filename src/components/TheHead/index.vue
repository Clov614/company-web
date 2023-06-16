<!--
 * @Author: ink 2421665373@qq.com
 * @Date: 2023-06-15 18:08:25
 * @LastEditors: ink 2421665373@qq.com
 * @LastEditTime: 2023-06-15 22:05:51
 * @FilePath: \company-web\src\components\TheHead\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="head">
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to='/home'>首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to='/news'>新闻</router-link></el-menu-item>
        <el-menu-item index="3"><a href="/home">重点关注</a></el-menu-item>
        <el-menu-item index="5" style="float: right;" v-show="!triggerSign"><router-link to='/login'>登录</router-link></el-menu-item>
        <el-menu-item index="7" style="float: right;" v-show="triggerSign" @click="SignOut">注销</el-menu-item>
        <!-- 这边后台路由跳转改为编程式跳转 -->
        <el-menu-item index="4" style="float: right;" @click="Go2ManagerClick">后台</el-menu-item>
        <!-- 不懂侦听session只能搁置 -->
        <!-- <el-menu-item index="6" style="float: right;">用户名: {{ nick_name }}</el-menu-item> -->
        <el-menu-item index="6" style="float: right;">用户名: {{ nick_name }}</el-menu-item>
        
    </el-menu>

  </div>
</template>

<script>
export default {
  name: "TheHead",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      // 用户昵称
      nick_name: '尚未登录',
      triggerSign: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 注销 清空session
    SignOut() {
      // 清空session作用域
      sessionStorage.clear();
      // 返回登录页面
      this.$router.push('/login').catch(err =>{err});
      // 注销也需要切换按钮 后台与登录按钮切换
      this.triggerSign = false;
      this.nick_name = '尚未登录';
    },
    // 跳转后台页面
    Go2ManagerClick() {
      // 判断session是否为空（是否处于登录status）
      const nick_name = sessionStorage.getItem("nick_name");
      const token = sessionStorage.getItem("token");
      if (nick_name != null && token != null) {
        // 跳转至后台页面
        this.$router.push("/manager").catch(err =>{err});
      }else { // 未登录不跳转弹出提示框
        // TODO 提示框提醒未登录 （或者跳转登录页面）（或者提示用户未登录是否跳转登录页面）
      }
    },
    // 监听器中刷新nick_name
    RefreshNickName() {
      // console.log('触发监听器方法');
      this.nick_name = sessionStorage.getItem('nick_name');
      // 后台与登录按钮切换
      this.TriggerChange();
    },
    // 后台与登录按钮切换
    TriggerChange() {
      if (this.nick_name != '尚未登录' || this.nick_name != null) {
        this.triggerSign = true;
      } else {
        this.triggerSign = false;
      }
    },
  },
  computed: {
    // 刷新用户昵称
    // TheNickName() {  // 弃用
    //   const session_nick_name = sessionStorage.getItem("nick_name");
    //   console.log(session_nick_name);
    //   if (session_nick_name != null) {
    //     return session_nick_name;
    //   }
    //   return '尚未登录';
    // },
  },
  watch: {
    // 监听session变化
    // 不懂侦听session变化
    // sessionStorage: {
    //   deep: true,
    //   handler() {
    //     console.log("监听到了变化");
    //     this.RefreshNickName()
    //   }
    // },
  },
  mounted() {
    // 创建监听钩子函数
    window.addEventListener('setItem',this.RefreshNickName)
  },
  beforeDestroy() {
    window.removeEventListener('setItem',this.RefreshNickName)
  }
}
</script>

<style scoped>
#head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>