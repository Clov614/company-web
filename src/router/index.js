import VueRouter from 'vue-router'
import Vue from 'vue'

// 导入组件
import TheHome from '@/views/TheHome.vue'
import BgManagePage from '@/views/BgManagePage.vue'
import AddAnnounce from '@/components/AddAnnounce.vue'
import UpDataAnnounce from '@/components/UpDataAnnounce.vue'
import AnnoList from '@/components/AnnoList.vue'
import TheLogin from '@/components/TheLogin'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'TheHome',
        component: TheHome
    },
    {
        path: '/login',
        name: 'TheLogin',
        component: TheLogin
    },
    {
        path: '/manager',
        name: 'BgManagePage',
        component: BgManagePage,
        children: [{            // 配置后台管理页面的子路由
            path: 'addAnno',
            name: 'AddAnnounce',
            component: AddAnnounce
        },
        {
            path: 'updataAnno',
            name: 'UpDataAnnounce',
            component: UpDataAnnounce
        },
        {
            path:'annoList',
            name:'AnnoList',
            component:AnnoList
        },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router