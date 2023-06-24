const express=require('express')
const { addashaController, viewAshaController,getWorkerDetails } = require('../controllers/addAshactrl')


const router= express.Router()

//add asha post route

router.post('/addasha',addashaController)
router.post('/ashaname',viewAshaController)
router.post('/ashadetail/:name',async  (req, res) => {
    const workerName = decodeURIComponent(req.params.name);
     console.log(name)
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
module.exports = router