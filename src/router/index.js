import VueRouter from 'vue-router'
import Vue from 'vue'

// 导入组件
import TheHome from '@/views/TheHome.vue'
import BgManagePage from '@/views/BgManagePage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'TheHome',
        component: TheHome
    },
    {
        path: '/manager',
        name: 'BgManagePage',
        component: BgManagePage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router