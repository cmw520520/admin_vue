import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

const vue = new Vue()
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; chartset=UTF-8'

export default {
  fetch (path, params) {
    if (!(params instanceof FormData)) {
      params = qs.stringify(params)
    }
    return axios.post(path, params).then(function (rep) {
      let data = rep.data
      if (data.code && data.code !== 1) {
        vue.$message({
          showClose: true,
          message: data.message,
          type: 'error'
        })
        return Promise.reject(data)
      }
      return data
    })
  }
}
