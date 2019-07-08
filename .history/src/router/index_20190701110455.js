import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Manage from '@/page/Manage'
import Home from '@/page/home/Home'
import UserList from '@/page/user/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Manage,
      children: [
        {
          path: '',
          component: Home,
          meta: []
        },
        {
          path: '/user/userlist',
          component: UserList,
          meta: []
        }
      ]
    }
  ]
})
