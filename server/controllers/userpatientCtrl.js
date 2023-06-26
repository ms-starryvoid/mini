const patientModel = require("../models/patientModel")
const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const patientloginController = async(req,res)=>{
    try {
        console.log(req.body)
        const patient = await userModel.findOne({email:req.body.email})
    if(!patient)
    {
        return res.status(400).send({message:"user not found",success:false})
    }
    if(!patient.isPatient)
    {
        return res.status(200).send({message:"user not found",success:false})

    }
    const isMatch = await bcrypt.compare(req.body.password,patient.password)
    if(!isMatch)
    {
        return res.status(200).send({message:"invalid email or password", success:false})

    }
    const token = jwt.sign({id:patient._id},process.env.JWT_SECRET,{expiresIn: "1d"});
    
    res.status(200).send({message:'Login successful', success: true, token:token, isAdmin:patient.isAdmin})
    
    } catch (error) {
        console.log(error)
    }

}
const patientsignupController = async (req,res)=> {
    try{
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser)
        {
            return res.status(200).send({message:'user already exists',success:false})
        }
        const ashaData= await patientModel.findOne({patient_id:req.body.patient_id})
        console.log(ashaData)
        const existingashaUser = await userModel.findOne({ashaid:req.body.patient_id})
        if(existingashaUser)
        {
            return res.send({message:'an account for provided patient already exists', success:false})
        }
        if(!ashaData)
        {
            return res.send({message: 'no such patient exists / invalid patient id', success:false})
        }
        const password=req.body.password
        const salt =await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        req.body.password= hashedPassword
        
        const newUser= new userModel(req.body)
        newUser.isPatient=true
        await newUser.save()
        
        
        res.status(201).send({message:'Register success',success:true});
        
     }catch(error)
     {
        console.log(error)
        res.status(500).send({success:false, message:`signup error ${error.message}`})
     }

}

const patientauthController = async (req,res)=>{
    try {
        const user = await userModel.findOne({_id:req.body.userId})
        const ashaData = await patientModel.findOne({patient_id:user.ashaid})
        if(!user)
        {
            return res.status(200).send({message:'user not found', success:false}) 
        }
        else{
            //const userdata = await ashaModel.findOne({asha_id:ashaid})
            res.status(200).send({success:true, data :{
                name:user.name,
                email:user.email,
                uid:user.ashaid,
                phone:ashaData.phone,
                address:ashaData.address.housen
                //isAdmin:user.isAdmin
            },
        })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({message:' authentication error', success:false,error})
    }

}
module.exports={patientloginController,patientauthController,patientsignupController}