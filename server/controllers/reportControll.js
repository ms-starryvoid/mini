import { reportModel } from "../models/reportModel"
import visitModel from "../models/visitModel"

 const addreportController = async(req,res)=>{
   try {
      const report = new reportModel(req.body);
      await report.save();
  
      res.status(200).json({ message: 'Report added successfully' });
    } catch (error) {
      console.error('Error adding report:', error);
      res.status(500).json({ error: 'An error occurred while adding the report' });
    }
 }



 const viewrepController= async(req,res)=>{
   try {
      const { patient_id } = req.body; // Assuming the patient ID is provided in the request body
  
      const reports = await visitModel.find({patient_id: patient_id });
  
      res.status(200).json(reports);
    } catch (error) {
      console.error('Error fetching reports:', error);
      res.status(500).json({ error: 'An error occurred while fetching reports' });
    }
    
 }
 module.exports={addreportController,viewrepController}