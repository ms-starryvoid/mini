// adminRoutes.js
const express = require('express');
const router = express.Router();
const stockModel= require('../models/stockModel')
const stockreqModel = require('../models/stockreqmodel');
const patientModel = require('../models/patientModel');


// Get stock list
router.get('/stock', async (req, res) => {
  try {
    const stockList = await stockModel.find({},'stock_name quantity');
    
    res.json(stockList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', success: false });
  }
});

// Update stock quantity
router.put('/stockupdate', async (req, res) => {
    console.log(req.body)
  

  try {
    const stock = await stockModel.findOne({stock_name:req.body.stock_name});
    if (!stock) {
        const newStock =stockModel(req.body)
         
        await newStock.save()
      return res.status(200).json({ message: 'Stock added' , success:true});
    
    }
   console.log(stock)

    stock.quantity = Number(req.body.quantity )+stock.quantity;
    await stock.save();

    res.json(stock);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', success: false });
  }
});

// Get pending stock requests
router.get('/requests', async (req, res) => {
  try {
    const pendingRequests = await stockreqModel.find({ status: 'pending' });
    
    res.json(pendingRequests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', success: false });
  }
});

// Approve stock request
router.put('/requests/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const stockRequest = await stockreqModel.findOneAndUpdate({stock_name:id} , { status: 'approved' },
    { new: true });
    console.log(stockRequest)
    if (!stockRequest) {
      return res.status(404).json({ message: 'Stock request not found' });
    }
        res.json(stockRequest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', success: false });
  }
});

module.exports = router;
