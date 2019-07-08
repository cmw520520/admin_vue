<template>
    <el-row>
      <el-col>
        <el-table
        v-if="userList"
        :data="userList"
        stripe
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width:100%;">
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

        <div style="margin-top: 20px">
          <!-- <el-button @click="setCurrent(tableData[1])">选中第二行</el-button> -->
          <el-button @click="setCurrent()">取消选择</el-button>
        </div>

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
      currentRow: null
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
    getUserList () {
      this.$store.dispatch('GETUSERLIST')
    },
    setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
}
</script>

<style scope>

</style>
