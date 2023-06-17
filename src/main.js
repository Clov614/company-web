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
axios.defaults.baseURL = 'http://localhost:9000' // 后端地址(使用springMVC开发REST API)

Vue.use(ElementUI)

Vue.config.productionTip = false

// 创建全局监听事件
Vue.prototype.resetSetItem = function (key, newVal) {
  if (key === 'watchStorage') {

      // 创建一个StorageEvent事件
      var newStorageEvent = document.createEvent('StorageEvent');
      const storage = {
          setItem: function (k, val) {
              sessionStorage.setItem(k, val);

              // 初始化创建的事件
              newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);

              // 派发对象
              window.dispatchEvent(newStorageEvent)
          }
      }
      return storage.setItem(key, newVal);
  }
}

new Vue({
  render: h => h(App),
  router,  //2、申明router
}).$mount('#app')
