const express = require('express')
const router=express.Router()
router.post('/profileview/:name',async  (req, res) => {
    const workerName = decodeURIComponent(req.params.name);
  
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
  module.exports= router