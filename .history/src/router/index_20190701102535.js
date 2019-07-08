import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Manage from '@/page/Manage'
import UserList from '@/page/user/UserList'
import Home from '@/page/Home/Home'

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
          component: Home
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
