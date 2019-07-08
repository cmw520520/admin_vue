import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Manage from '@/page/Manage'
// 首页
import Home from '@/page/Home/Home'
// 用户管理
import UserList from '@/page/user/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Manage,
      children: [
        { // 首页 默认显示页面
          path: '',
          component: Home,
          meta: []
        },
        // 用户管理
        {
          path: '/user/userlist',
          component: UserList,
          meta: []
        }
      ]
    }
  ]
})
