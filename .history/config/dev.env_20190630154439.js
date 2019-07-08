'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // TARGET_SERVER: 'http://localhost:8080'
  TARGET_SERVER: 'http://www.baidu.com'
})
