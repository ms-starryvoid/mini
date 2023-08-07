const  reportModel  =require("../models/reportModel");
const visitModel =require("../models/visitModel")

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
      // Assuming the patient ID is provided in the request body
      
      const reports = await visitModel.find({patient_id: req.query.patient_id });
     console.log(reports)
     return res.status(200).json({reports, success:true});
    } catch (error) {
      console.error('Error fetching reports:', error);
      return res.status(500).json({ error: 'An error occurred while fetching reports' });
    }
    
 }
 const viewIndividualController= async(req,res)=>{
  try {
     // Assuming the patient ID is provided in the request body
     
     const report = await visitModel.find({patient_id: req.query.patient_id, day:req.query.day });
    console.log(report)
    return res.status(200).json({report, success:true});
   } catch (error) {
     console.error('Error fetching reports:', error);
     return res.status(500).json({ error: 'An error occurred while fetching reports' });
   }
   
}
 const reportEntry =async(req,res)=>{
  try {
    const { patient_id, asha_id, visit_date, blood_sugar, blood_pressure, remarks } = req.body;

    // Create a new visit document
    const newVisit = new Visit({
      patient_id,
      asha_id,
      day: new Date(visit_date), // Ensure 'visit_date' is in a valid date format
      report: {
        blood_sugar,
        blood_pressure,
        remarks,
      },
    });

    // Save the visit document to the database
    const savedVisit = await newVisit.save();

    // Respond with a success message and the saved visit data
    res.status(200).json({ message: 'Visit saved successfully', visit: savedVisit });
  } catch (error) {
    console.error('Error saving visit:', error);
    // Handle the error and respond with an appropriate error message
    res.status(500).json({ error: 'Failed to save visit' });
  }

 }
 module.exports={addreportController,viewrepController,reportEntry,viewIndividualController}