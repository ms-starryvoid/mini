const express = require('express')
const { visitDateCtrl } = require('../controllers/visitdetailController')
const router= express.Router()

router.post('/visitdetail',visitDateCtrl,)
 module.exports=router