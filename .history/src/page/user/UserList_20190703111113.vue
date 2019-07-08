<template>
    <el-row>
      <el-col>
        <el-table
        ref="multipleTable"
        v-if="userList"
        :data="userList"
        stripe
        style="width:100%;"
        @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
            prop="date"
            label="日期"
            width="120"
            ></el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="150">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
            <el-table-column
            label="操作">
            <template
            slot-scope="scope">
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
    </el-row>

</template>

<script>
import {mapState} from 'vuex'
import {user} from '../../store/user/index'

export default {
  name: 'userlist',
  data () {
    return {
      multipleSelection: []
    }
  },
  computed: {
    ...mapState({// 将状态映射至vue组件上，使其可通过this访问
      userList: state => user.state.userList
    })
  },
  mounted () {
    this.getUserList()
  },
  methods: {
    // 获取用户列表
    getUserList () {
      this.$store.dispatch('GETUSERLIST')
    },
    // 获取已选中的条目
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>

<style scope>

</style>
