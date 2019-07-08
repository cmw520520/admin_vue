import * as types from './types'
import http from '../../utils/http'

const user = {
  state: {
    userList: {}
  },
  actions: {
    [types.GETUSERLIST] (context, params) {
      http.fetch('/user/userlist', params).then(data => {
        context.commit(types.GETUSERLIST, data)
      })
    }
  },
  mutations: {
    [types.GETUSERLIST] (state, data) {
      state.userList = data
      console.log(state.userList)
    }
  }
}

export {
  user
}
