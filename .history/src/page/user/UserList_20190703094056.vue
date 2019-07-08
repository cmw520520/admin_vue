<template>
    <el-row>
      <el-col>
        <el-table v-if="userList" :data="userList" style="width:100%;">
            <el-table-column prop="date" label="日期" width="50"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, tableData)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <el-col>
        <el-button @click="getUserList">重新获取</el-button>
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
