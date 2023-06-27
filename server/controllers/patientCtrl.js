
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const patientModel = require('../models/patientModel')
const userModel = require('../models/userModel')

const addpatientController = async (req,res)=>{
    try {
       const asha = await patientModel.findOne({patient_id:req.body.patient_id})
       if(asha)
       {
        return res.status(500).send({message:'THIS patient already exists', success:false})
       } 
       else{
        const newAsha = new patientModel(req.body)
        await newAsha.save()
        console.log(newAsha)
        return res.status(200).send({message:"NEW PATIENT SUCCESSFULLY ADDED", success:true})
       }
    } catch (error) {
        console.log(error)
    }

}
const deletepatientController = async(req,res)=>{
    try{
        const asha = await patientModel.findOne({patient_id:req.body.patient_id})
        const user= await userModel.findOne({asha_id:req.body.patient_id})
        asha.deleteOne()
        user.deleteOne()
        return res.send({message:'deleted',success:true})
    }
    catch(error)
    {
        console.log(error)

    }
}
const viewpatientController = async(req,res)=>{
    try {
        const asha= await patientModel.find({},'name patient_id')
        res.status(200).json(asha)
    } catch (error) {
        console.log(error)
        res.status(500).send({message:'Server error',success:false})
    }

}
const getpatientDetails= async(workerName)=>{
    try {
       console.log(workerName)
        const worker = await patientModel.findOne({patient_id:workerName})
        console.log(worker)
        return worker
        
    } catch (error) {
        console.log(error)
    }
}
const viewpatientashaController = async(req,res)=>{
    try {
        const ward= req.ward_no;
        const asha= await patientModel.find({ward_number:ward},'name patient_id')
        res.status(200).json(asha)
    } catch (error) {
        console.log(error)
        res.status(500).send({message:'Server error',success:false})
    }

}
 module.exports = {addpatientController ,deletepatientController,viewpatientController,getpatientDetails}