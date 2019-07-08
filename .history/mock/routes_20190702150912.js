Mock = require('mockjs')

// 用户列表
const userList = require('./api/user/userList');

const data = {
    userList: userList
}

const routes = {
    '/user/userlist': '/userlist'
}

module.exports = {
    data, routes
}