const express = require('express')
const { visitDateCtrl, visitDetail, visitdaypatient } = require('../controllers/visitdetailController')
const { todayvisit, scheduler } = require('../controllers/visitscheduleController')
const router= express.Router()

router.post('/visitdetail',visitDateCtrl)
router.post('/todaymothvisit',todayvisit)
router.post('/schedulegenerate',scheduler)
router.post('/visidetail',visitDetail)
router.post('/visitday',visitdaypatient)
 module.exports=router