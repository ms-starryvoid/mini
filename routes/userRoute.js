const express = require('express')
const { loginController, signupController, authController } = require('../controllers/userCtrl')
const authMiddleware = require("../middlewares/authMiddleware")



const router = express.Router()


//routes
//loginpost
router.post('/login',loginController)
//signup post
router.post('/signup',signupController)
//auth post
router.post('/getUserData',authMiddleware, authController)

module.exports=router