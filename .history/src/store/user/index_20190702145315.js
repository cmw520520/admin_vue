import * as types from './types'
import http from '../../utils/http'

const state = {
  userList: {}
}

const actions = {
  [types.GETUSERLIST] (context, params) {
    http.fetch('/user/userlist', params).then(data => {
      context.commit(types.GETUSERLIST, data);
    })
  }
}

const mutations = {
  [types.GETUSERLIST] (state, data) {
    state.userList = data;
    console.log(state.userList);
  }
}

export default {
  state, actions, mutations
}
