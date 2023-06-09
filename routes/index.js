const express = require('express')
const router = express.Router()
const passport = require('../config/passport')
const userController = require('../controller/user-controller')
const tweetController = require('../controller/tweet-Controller')
const { authenticated, authenticatedAdmin, authenticatedUser } = require('../middleware/api-auth')
const { apiErrorHandler } = require('../middleware/error-handler')

// Tweets
router.get('/api/tweets', tweetController.getTweets)

// Users
router.get('/api/users/:id/tweets', authenticated, userController.getUserTweets)
router.get('/api/users/:id/replied_tweets', authenticated, userController.getUserReplies)
router.get('/api/users/:id', authenticated, userController.getUser)
// 登入& 註冊
router.post('/api/users/login', userController.signIn)
router.post('/api/users', userController.signUp)
// 錯誤訊息處理
router.use('/', apiErrorHandler)

module.exports = router
