<template>
  <div id="head">
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to='/home'>首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to='/newsPage'>新闻</router-link></el-menu-item>
        <el-menu-item index="3"><a href="/home">重点关注</a></el-menu-item>
        <el-menu-item index="5" style="float: right;"><router-link to='/login'>登录</router-link></el-menu-item>
        <el-menu-item index="4" style="float: right;"><router-link to='/manager'>后台</router-link></el-menu-item>
        
    </el-menu>

  </div>
</template>

<script>
export default {
  name: "TheHead",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
#head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>