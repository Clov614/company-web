<template>
  <div id="app">
    <the-head></the-head>
    <!-- 后台页面，暂时隐藏 -->
    <!-- <div id="bg-manage-page" v-if="tempStatus">
      <BgManagePage></BgManagePage>
    </div> -->
    <router-link to='/home'>首页</router-link> &nbsp;
    <router-link to='/manage'>后台</router-link> &nbsp;
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

.el-header {
  display: flex;
}



.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;

}

.cebian {
  height: 500px;
  width: 200px;
}

.fter {
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.12), 0 0 6px rgba(208, 0, 0, 0.04);
  height: 50px;

  margin: 0 auto;
  text-align: center;
}

.info {
  width: 1000px;

}

.lunbo {
  height: 340px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 600px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
