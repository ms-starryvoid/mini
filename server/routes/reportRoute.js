const express = require("express")
const router= express.Router()
const { visitDateCtrl,reportentryCtrl } = require('../controllers/visitdetailController')
const {viewrepController,addreportController, reportEntry } = require('../controllers/reportControll')


router.get('/visitdetail',visitDateCtrl)

router.get('/reportentry',reportentryCtrl)

router.get('/viewreport',viewrepController)

router.get('/addreport',addreportController)
router.get('/reportentryr',reportEntry)
module.exports=router