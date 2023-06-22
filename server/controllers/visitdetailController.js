//import ashaModel from "../models/ashaModel";
//import patientModel from "../models/patientModel";
//import { visitModel } from "../models/visitModel"

const ashaModel = require("../models/ashaModel");
const patientModel = require("../models/patientModel");
const visitModel = require('../models/visitModel');


const visitDateCtrl =async(req,res)=>{
    const { month, year } = req.body;
    console.log(month)
    try{
        const startDate =`${year}-${month}-01`;
        const endDateT =`${year}-${month}-31`;

    
   console.log(startDate)
   console.log(endDateT)
   
    const visits = await visitModel.find({
      day: { $gte: startDate, $lte: endDateT },
    });
      console.log(visits)
      res.json({success:true,visits})
    }catch(error)
    {
        console.log(error)
        res.json({message:'something went wrong'})
    }
   
}
const visitDetail =async(req,res)=>{
    try {
        const visitdate= req.query
        const visit= await visitModel.find({Day:visitdate},'patient_id asha_id report')
        const patientIds = visit.map((visit) => visit.patient_id);
        const ashaIds = visit.map((visit) => visit.asha_id);
        const patients = await patientModel.find({ patient_id: { $in: patientIds } });
        const ashas = await ashaModel.find({ asha_id: { $in: ashaIds } });
        console.log(visit)
        console.log(`patient ids of date ${patientIds}`)
        console.log(`ashas detail ${ashas}`)
        const visitDetails = visit.map((visit) => {
            const patient = patients.find((patient) => patient.patient_id === visit.patient_id);
            const asha = ashas.find((asha) => asha.asha_id === visit.asha_id);
          });
        console.log(visitDetails)
        res.status(200).json(visitDetails,{success:true})
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}



const reportentryCtrl = async (req,res)=>{
    console.log(req.body)
    const {visitDate,patient_id, blood_sugar, blood_pressure, remarks } = req.body;
    try {
       const visit = await visitModel.findOne({patient_id:patient_id,day:visitDate}) 
       visit.report.blood_sugar=blood_sugar;
       visit.report.blood_pressure=blood_pressure
       visit.report.remarks=remarks
       await visit.save()
       res.status(200).json({ success: true, message: 'Report details updated successfully' });
  
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
 
    }
}
module.exports={visitDateCtrl,reportentryCtrl}