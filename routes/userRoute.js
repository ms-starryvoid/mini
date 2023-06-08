const express = require('express')
const { loginController, signupController } = require('../controllers/userCtrl')




const router = express.Router()


//routes
//loginpost
router.post('/login',loginController)
//signup post
router.post('/signup',signupController)

module.exports=router