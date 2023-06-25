const express=require('express')

const { addpatientController, viewpatientController,getWorkerDetails, getpatientDetails } = require('../controllers/patientCtrl')
const { getApprovedRequests, getPendingRequests } = require('../controllers/stockreqControl')


const router= express.Router()

//add asha post route

router.post('/addpatient',addpatientController)
router.post('/patient',viewpatientController)
router.post('/patientdetail',async  (req, res) => {
    const workerName = req.body.patient_id
  
    // Logic to retrieve worker details based on the name
    // Replace this with your actual implementation
    
    try {
        const patientDetails = await getpatientDetails(workerName);
       if (patientDetails) {
       
      res.send(patientDetails);
    } else {
      res.status(404).json({ message: 'patient not found' });
    }
    } catch (error) {
        console.log(error)
    }
        
    
  });

  router.post('/approvedreq',getApprovedRequests)
  router.post('/pendingreq',getPendingRequests)
module.exports = router