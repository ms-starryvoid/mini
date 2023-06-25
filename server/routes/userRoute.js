const express = require('express')
const { loginController, signupController, authController } = require('../controllers/userCtrl')
const authMiddleware = require("../middlewares/authMiddleware")
const { ashaloginController, ashaauthController } = require('../controllers/userAshaCtrl')
const { patientauthController, patientsignupController, patientloginController } = require('../controllers/userpatientCtrl')



const router = express.Router()


//routes
//loginpost
router.post('/login',loginController)
//signup post
router.post('/signup',signupController)
//auth post
router.post('/getUserData',authMiddleware, authController)
router.post('/getashaData',authMiddleware,ashaauthController)
//asha login post
router.post('/ashalogin',ashaloginController)

router.post('/getpatientdata',authMiddleware,patientauthController)

router.post('/patientsignup',patientsignupController)

router.post('/patientlogin',patientloginController)
module.exports=router