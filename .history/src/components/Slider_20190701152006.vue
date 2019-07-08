<template>
  <el-menu :default-openeds="['1', '3']"
    background-color="rgb(84, 92, 100)"
    text-color="#fff"
    style="border:none;text-align:left;"
    router>
    <label v-for="(item, index) in navMenu" :key="index">
      <el-menu-item v-if="item.isHeader" :index="item.component">
        <i :class=item.icon></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>

      <el-submenu v-else :index="String(index)">
        <template slot="title">
          <i :class=item.icon></i>{{ item.name }}
        </template>
        <el-menu-item v-for="(item2, index2) in item.children" :key="index2" :index="item2.component">{{ item2.name }}</el-menu-item>
      </el-submenu>
    </label>
  </el-menu>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      navMenu: [
        {
          isHeader: true,
          name: '首页',
          icon: 'el-icon-menu',
          component: '/'
        },
        {
          name: '用户管理',
          icon: 'el-icon-user',
          children: [
            {
              name: '用户列表',
              component: '/user/userlist'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
