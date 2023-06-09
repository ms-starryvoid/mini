
const stockModel= require('../models/stockModel')
const stockreqModel = require('../models/stockreqmodel')

const stockreqCtrl= async (req,res)=>{
    try {
        console.log(req.body)
        const Sreq= await stockModel.findOne({stock_name:req.body.stock_name})
        if(!Sreq){
            return res.status(200).send({message: 'stock not found', success :false})
        }
        const Stockrequestquantity = req.body.quantity
        if(Sreq.quantity< Stockrequestquantity)
        {
            return res.status(200).send({message:"not enough quantity", success: false})
        }
        
        const stockreq = await stockreqModel.insertMany({stock_id:Sreq.stock_id , request_quantity: Stockrequestquantity,patient_id:req.body.patient_id,status:'pending', stock_name:req.body.stock_name})

        
        
    } catch (error) {
        console.log(error)
    }

}
const getPendingRequests = async (req, res) => {
    try {
      const patientId = req.body.patient_id;
      const pendingRequests = await stockreqModel.find({patient_id:patientId,status:'pending'})
      
    
      console.log(pendingRequests)
      res.status(200).send({
        pendingRequests,
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error", success: false });
    }
  };
  
  const getApprovedRequests = async (req, res) => {
    try {
      const patientId = req.body.patient_id;
      console.log(patientId)
      const approvedRequests = await stockreqModel.find({
        patient_id:patientId,
        status:'approved'
      })
      console.log(approvedRequests)
  
      res.status(200).send({
        approvedRequests,
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error", success: false });
    }
  };
  
module.exports={stockreqCtrl,getApprovedRequests,getPendingRequests}