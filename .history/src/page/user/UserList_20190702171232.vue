<template>
    <el-row>
      <el-col>
        <el-table v-if="userList" :data="userList">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-col>

      <el-col>
        <el-button :click="getUserList()">重新获取</el-button>
      </el-col>
    </el-row>

</template>

<script>
import {mapState} from 'vuex'
import {user} from '../../store/user/index'

export default {
  name: 'userlist',
  data () {
    return {
      i: ''
    }
  },
  computed: {
    ...mapState({
      userList: state => user.state.userList
    })
  },
  mounted () {
    this.getUserList()
  },
  methods: {
    getUserList () {
      this.$store.dispatch('GETUSERLIST')
    }
  }
}
</script>

<style scope>

</style>
