const express = require('express')
const { visitDateCtrl } = require('../controllers/visitdetailController')
const { todayvisit } = require('../controllers/visitscheduleController')
const router= express.Router()

router.post('/visitdetail',visitDateCtrl)
router.post('/todaymothvisit',todayvisit)
 module.exports=router