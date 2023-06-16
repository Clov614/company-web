const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true, //是否启动打开浏览器
    host: "0.0.0.0",//主机，0.0.0.0支持局域网地址，可以用真机测试
    port: 8080, //端口
    https: false,//是否启动https
    //配置跨域代理http,https
    proxy: {
      "/api": {
        target: "http://localhost:9000",
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  },
})
