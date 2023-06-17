
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const patientModel = require('../models/patientModel')

const addpatientController = async (req,res)=>{
    try {
       const asha = await patientModel.findOne({patient_id:req.body.patientid})
       if(asha)
       {
        return res.status(500).send({message:'THIS asha id already exists', success:false})
       } 
       else{
        const newAsha = new patientModel(req.body)
        await newAsha.save()
        return res.status(200).send({message:"NEW ASHA WORKER SUCCESSFULLY ADDED", success:true})
       }
    } catch (error) {
        console.log(error)
    }

}
const deletepatientController = async(req,res)=>{
    try{
        const asha = await patientModel.findOne({asha_id:req.body.asha_id})
        asha.deleteOne()
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
const getWorkerDetails= async(workerName)=>{
    try {
       
        const worker = await patientModel.findOne({name:workerName})
        
        return worker
    } catch (error) {
        console.log(error)
    }
}
 module.exports = {addpatientController ,deletepatientController,viewpatientController,getWorkerDetails}