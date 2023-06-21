const express = require("express")
const router= express.Router()
const { visitDateCtrl,reportentryCtrl } = require('../controllers/visitdetailController')


router.get('/visitdetail',visitDateCtrl)

router.get('/reportentry',reportentryCtrl)

module.exports=router