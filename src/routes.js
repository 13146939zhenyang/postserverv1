//用于管理所有的路径
const express = require('express')
const postsRoute = require('../src/routes/people')
const router = express.Router()

router.use('/posts',postsRoute)

module.exports = router