<template>
  <el-container style="height: 100%;">
    <el-col :span="4" style="background-color: #b3c0d1;overflow:hidden;">
      <el-col>
        <div class="logo">后台管理</div>
      </el-col>
      <el-col>
        <el-slider></el-slider>
      </el-col>
    </el-col>

    <el-col :span="20" style="border-left: 1px solid #b3c0d1;overflow: auto;overflow-scrolling: touch;">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
      </el-main>
    </el-col>
  </el-container>
</template>

<script>
import slider from '@/components/Slider'

export default {
  name: 'manage',
  components: {
    'el-slider': slider
  }
}
</script>

<style scope>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

/* 导航logo S */
.logo {
    height: 60px;
    line-height: 60px;
}
/* 导航logo E */
</style>
