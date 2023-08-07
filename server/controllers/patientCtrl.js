
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const patientModel = require('../models/patientModel')
const userModel = require('../models/userModel')
const nodemailer = require('nodemailer');
const visitModel = require('../models/visitModel');
const stockreqModel = require('../models/stockreqmodel');


const addpatientController = async (req,res)=>{
    try {
        console.log(req.body)
       const asha = await patientModel.findOne({patient_id:req.body.patient_id})
       console.log(asha)
       if(asha)
       {
        return res.status(500).send({message:'THIS patient already exists', success:false})
       } 
       else{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'homecarejourneys@gmail.com',
              pass: 'ugomdpeoapizlpij',
            },
          });
        const newAsha = new patientModel(req.body)
        await newAsha.save()
        console.log(newAsha)
        if(req.body.email)
        {
            const mailOptions = {
                from: 'homecarejourneys@gmail.com',
                to: req.body.email,
                subject: 'Patient ID Notification',
                text: `Your patient ID is: ${req.body.patient_id}`,
              };
        
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log('Error sending email:', error);
                } else {
                  console.log('Patient ID notification email sent:', info.response);
                }
              });
        }
        
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
        const visit= await visitModel.deleteMany({patient_id:req.body.patient_id})
        const stockreq= await stockreqModel.deleteMany({patient_id:req.body.patient_id})
        asha.deleteOne()
       
        if(user && typeof user !=="null")user.deleteOne()
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