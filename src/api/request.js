// 引入 axios
import axios from 'axios'
// 封装 baseURL
const request = axios.create({
    baseURL:'http://localhost:9000' // 后端地址(使用springMVC开发REST API)
})
// 向外暴露 request
export default request;