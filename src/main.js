import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'// 1、引入配置好的router
// 引入 axios
import axios from 'axios'

// 挂载一个自定义属性$http
Vue.prototype.$http = axios
// 全局配置axios请求根路径(axios.默认配置.请求根路径)
axios.defaults.baseURL = 'http://localhost:9000' // 后端地址(使用springMVC开发REST API后端)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,  //2、申明router
}).$mount('#app')
