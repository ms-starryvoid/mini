const stockreqModel = require("../models/stockreqmodel");



const stockstatusupdate=async(req,res)=>{
    try {
        const { stock_name, patient_id, status } = req.body;
    
        // Find the stock request with matching stock_name and patient_id
        const stockRequest = await stockreqModel.findOne({ stock_name:stock_name, patient_id:patient_id });
    
        if (!stockRequest) {
          return res.status(404).json({ message: 'Stock request not found' });
        }
    
        // Update the status field
        stockRequest.status = status;
    
        // Save the updated record
        await stockRequest.save();
    
        return res.status(200).json({ message: 'Stock request status updated successfully' });
      } catch (error) {
        console.error('Error updating stock request status:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
   
    
}
module.exports={stockstatusupdate}