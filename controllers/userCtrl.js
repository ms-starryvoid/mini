const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')


const loginController = ()=> {
    
  
}
const signupController = async (req,res)=> {
    try{
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser)
        {
            return res.status(200).send({message:'user already exists',success:false})
        }
        const password=req.body.password
        const salt =await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        req.body.password= hashedPassword
        const newUser= new userModel(req.body)
        await newUser.save()
        res.status(201).send({message:'Register success',success:true});
        
     }catch(error)
     {
        console.log(error)
        res.status(500).send({success:false, message:`signup error ${error.message}`})
     }

}

module.exports= { loginController,signupController}