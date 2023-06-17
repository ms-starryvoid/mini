import { reportModel } from "../models/reportModel"

 const addreportController = async(req,res)=>{
    const report = new reportModel(req.body)
    report.save()
 }



 const viewrepController= async(req,res)=>{
    const patient = await reportModel.findOne({patient_id:req.patient_id})
    
 }
 module.exports={addreportController,viewrepController}