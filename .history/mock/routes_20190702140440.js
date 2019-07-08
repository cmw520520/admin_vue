import Mock from 'mockjs'

// 用户列表
import userList from './api/user/userList'

const data = {
    userList
}

const routes = {
    '/user/userlist': '/userlist'
}

export default {
    data, routes
}