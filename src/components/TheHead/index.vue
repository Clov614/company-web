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

<style scoped>
#head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>