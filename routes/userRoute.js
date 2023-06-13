const express = require('express')
const { loginController, signupController, authController } = require('../controllers/userCtrl')
const authMiddleware = require("../middlewares/authMiddleware")
const { ashaloginController } = require('../controllers/userAshaCtrl')



const router = express.Router()


//routes
//loginpost
router.post('/login',loginController)
//signup post
router.post('/signup',signupController)
//auth post
router.post('/getUserData',authMiddleware, authController)
//asha login post
router.post('/ashalogin',ashaloginController)
module.exports=router