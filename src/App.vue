<template>
  <div id="app">
    <the-head></the-head>
    <!-- 后台页面，暂时隐藏 -->
    <!-- <div id="bg-manage-page" v-if="tempStatus">
      <BgManagePage></BgManagePage>
    </div> -->
    <!-- <router-link to='/home'>首页</router-link> &nbsp;
    <router-link to='/manager'>后台</router-link> &nbsp; -->

    <router-view></router-view>
  </div>
</template>

<script>
import TheHead from './components/TheHead/index.vue'
export default {
  name: 'App',
  data() {
    return {
      tempStatus: false, // 一个临时的状态
    }
  },
  components: {
    TheHead,
  },
  methods: {
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          });
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
