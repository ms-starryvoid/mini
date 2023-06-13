
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const ashaModel = require('../models/ashaModel')
const ashaprofileController =async(name)=>{
    try {
        const asha = await ashaModel.findOne({name:name})
        return asha
    } catch (error) {
        
    }
}
const addashaController = async (req,res)=>{
    try {
       const asha = await ashaModel.findOne({asha_id:req.body.ashaid})
       if(asha)
       {
        return res.status(500).send({message:'THIS asha id already exists', success:false})
       } 
       else{
        const newAsha = new ashaModel(req.body)
        await newAsha.save()
        return res.status(200).send({message:"NEW ASHA WORKER SUCCESSFULLY ADDED", success:true})
       }
    } catch (error) {
        console.log(error)
    }

}
const deleteashaController = async(req,res)=>{
    try{
        const asha = await ashaModel.findOne({asha_id:req.body.asha_id})
        asha.deleteOne()
        return res.send({message:'deleted',success:true})
    }
    catch(error)
    {
        console.log(error)

    }
}
const viewAshaController = async(req,res)=>{
    try {
        const asha= await ashaModel.find({},'name')
        res.status(200).json(asha)
    } catch (error) {
        console.log(error)
        res.status(500).send({message:'Server error',success:false})
    }

}
const getWorkerDetails= async(workerName)=>{
    try {
       
        const worker = await ashaModel.findOne({name:workerName})
        
        return worker
    } catch (error) {
        console.log(error)
    }
}
 module.exports = {addashaController ,deleteashaController,viewAshaController,getWorkerDetails}