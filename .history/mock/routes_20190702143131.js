const Mock = require('mockjs')

// 用户列表
const userList = require('./api/user/userList');

const data = {
    userList
}

const routes = {
    '/user/userlist': '/userlist'
}

export default {
    data, routes
}