<template>
    <el-table :data="userList">
        <el-table-column prop="date" label="日期" width="140"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
</template>

<script>
import {mapState} from 'vuex'
import {user} from '../../store/user/index'

export default {
  name: 'userlist',
  data () {
  },
  computed: {
    ...mapState({
      userList: state => user.state.userList
    })
  },
  mounted () {
    this.$store.dispatch('GETUSERLIST')
  }
}
</script>

<style scope>

</style>
