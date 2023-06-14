<template>
  <div id="app">
    <the-head></the-head>
    <el-container>
      <el-button type="text" @click="open">点击查看最新公告</el-button>
      <el-container>
        <div class="cebian">
          <el-steps direction="vertical" :active="2">
            <el-step title="第一步" description="公司第一阶段战略"></el-step>
            <el-step title="第二步" description="公司第二阶段战略"></el-step>
            <el-step title="第三步" description="关注鬼头明里喵关注鬼头明里谢谢喵"></el-step>
            <el-step title="第四步" description="关注鬼头明里喵关注鬼头明里谢谢喵"></el-step>
          </el-steps>
        </div>
        <el-container>
          <el-main>
            <div class="lunbo">
              <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3>{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="info">
              <el-descriptions>
                <el-descriptions-item label="用户名">桐生战狼</el-descriptions-item>
                <el-descriptions-item label="手机号">1145141919810</el-descriptions-item>
                <el-descriptions-item label="居住地">下北泽</el-descriptions-item>
                <el-descriptions-item label="备注">
                  <el-tag size="small">学校</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="联系地址">下北泽114号</el-descriptions-item>
              </el-descriptions>
            </div>
          </el-main>
        </el-container>
        <template>
          Drop anything you want here senpai
          
        </template>
      </el-container>


      <el-footer>
        <div class="fter">
          <p>COPY RIGHT @A604 PRODUCTION</p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import TheHead from './components/TheHead/index.vue'

export default {
  name: 'App',
  components: {
    TheHead
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
.fter{
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
