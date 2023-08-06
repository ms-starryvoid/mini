
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const ashaModel = require('../models/ashaModel')
const nodemailer=require('nodemailer')
const ashaprofileController =async(name)=>{
    try {
        const asha = await ashaModel.findOne({asha_id:name})
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
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'homecarejourneys@gmail.com',
              pass: 'ugomdpeoapizlpij',
            },
          });
        const newAsha = new ashaModel(req.body)
        await newAsha.save()
        if(req.body.email)
        {
            const mailOptions = {
                from: 'homecarejourneys@gmail.com',
                to: req.body.email,
                subject: 'ASHA ID Notification',
                text: `Your ASHA ID is: ${req.body.ashaid}. You can now signup for  a portal with this id.`,
              };
        
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log('Error sending email:', error);
                } else {
                  console.log('ASHA ID notification email sent:', info.response);
                }
              });
        }
        return res.status(200).send({message:"NEW ASHA WORKER SUCCESSFULLY ADDED", success:true})
       }
    } catch (error) {
        console.log(error)
    }

}
const deleteashaController = async(req,res)=>{
    try{
        const asha = await ashaModel.deleteOne({asha_id:req.body.asha_id})
        const user= await userModel.deleteOne({asha_id:req.body.patient_id})

        return res.send({message:'deleted',success:true})
    }
    catch(error)
    {
        console.log(error)

    }
}
const viewAshaController = async(req,res)=>{
    try {
        const asha= await ashaModel.find({},'name asha_id')
        
        res.status(200).json(asha)
    } catch (error) {
        console.log(error)
        res.status(500).send({message:'Server error',success:false})
    }

}
const getWorkerDetails= async(workerName)=>{
    try {
       
        const worker = await ashaModel.findOne({asha_id:workerName})
        
        return worker
    } catch (error) {
        console.log(error)
    }
}
 module.exports = {addashaController ,deleteashaController,viewAshaController,getWorkerDetails}