const express=require('express')
const { addashaController, viewAshaController,getWorkerDetails, deleteashaController } = require('../controllers/addAshactrl')
const ashaModel = require('../models/ashaModel')



const router= express.Router()

//add asha post route
router.post('/ashadelete',deleteashaController)
router.post('/addasha',addashaController)
router.post('/ashaname',viewAshaController)
router.post('/ashadetail',async  (req, res) => {
    const workerName = req.body.name;
     console.log(workerName)
    // Logic to retrieve worker details based on the name
    // Replace this with your actual implementation
    
    try {
        const workerDetails = await getWorkerDetails(workerName);
       if (workerDetails) {
       
      res.send(workerDetails);
    } else {
      res.status(404).json({ message: 'Worker not found' });
    }
    } catch (error) {
        console.log(error)
    }
        
    
  });


  router.post('/ashaprofileupdate', async (req, res) => {
    try {
      const name = req.body.name;
      const updatedData = req.body;
  
      // Logic to update ASHA profile based on name
      // Replace this with your actual implementation
  
      const Profile = await ashaModel.findOne({asha_id:name});

     Profile.email=updatedData.email
     Profile.phone=updatedData.phone
     await Profile.updateOne()
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  
module.exports = router