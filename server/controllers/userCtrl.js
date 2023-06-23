const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const ashaModel = require('../models/ashaModel')


const loginController = async (req,res)=> {
    try {
        console.log(req.body)
        const user = await userModel.findOne({email:req.body.email})
        console.log(user)
        if(!user)
        {
            return res.status(200).send({message:"user not found",success:false})

        }
        const isMatch = await bcrypt.compare(req.body.password,user.password)
        if(!isMatch)
        {
            return res.status(200).send({message:"invalid email or password", success:false})

        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: "1d"});
        
        res.status(200).send({message:'Login successful', success: true, token:token, isAdmin:user.isAdmin,isAsha:user.isAsha})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false, message:`signup error ${error.message}`})
    
    }
    
  
}
const signupController = async (req,res)=> {
    try{
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser)
        {
            return res.status(200).send({message:'user already exists',success:false})
        }
        const ashaData= await ashaModel.findOne({asha_id:req.body.ashaid})
        const existingashaUser = await userModel.findOne({ashaid:req.body.ashaid})
        if(existingashaUser)
        {
            return res.send({message:'an account for provided asha id already exists', success:false})
        }
        if(!ashaData)
        {
            return res.send({message: 'no such asha exists / invalid asha id', success:false})
        }
        const password=req.body.password
        const salt =await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        req.body.password= hashedPassword
        
        const newUser= new userModel(req.body)
        newUser.isAsha=true
        await newUser.save()
        
        
        res.status(201).send({message:'Register success',success:true});
        
     }catch(error)
     {
        console.log(error)
        res.status(500).send({success:false, message:`signup error ${error.message}`})
     }

}


const authController = async (req,res)=>{
    try {
        const user = await userModel.findOne({_id:req.body.userId})
        const ashaData = await ashaModel.findOne({asha_id:user.ashaid})
        if(!user)
        {
            return res.status(200).send({message:'user not found', success:false}) 
        }
        else{
             console.log(user)//const userdata = await ashaModel.findOne({asha_id:ashaid})
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
module.exports= { loginController,signupController,authController}