/*
 * @Author: ink 2421665373@qq.com
 * @Date: 2023-06-15 18:08:25
 * @LastEditors: ink 2421665373@qq.com
 * @LastEditTime: 2023-06-15 20:10:32
 * @FilePath: \company-web\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: ink 2421665373@qq.com
 * @Date: 2023-06-15 18:08:25
 * @LastEditors: ink 2421665373@qq.com
 * @LastEditTime: 2023-06-15 20:09:12
 * @FilePath: \company-web\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import VueRouter from 'vue-router'
import Vue from 'vue'

// 导入组件
import TheHome from '@/views/TheHome.vue'
import BgManagePage from '@/views/BgManagePage.vue'
import AddAnnounce from '@/components/AddAnnounce.vue'
import UpDataAnnounce from '@/components/UpDataAnnounce.vue'
import NewsModule from '@/views/NewsModule.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "TheHome",
    component: TheHome,
  },
  {
    path: "/news",
    name: "NewsModule",
    component: NewsModule,
  },
  {
    path: "/manager",
    name: "BgManagePage",
    component: BgManagePage,
    children: [
      {
        // 配置后台管理页面的子路由
        path: "addAnno",
        name: "AddAnnounce",
        component: AddAnnounce,
      },
      {
        path: "updataAnno",
        name: "UpDataAnnounce",
        component: UpDataAnnounce,
      },
    ],
  },
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router