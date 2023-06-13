const patientModel = require("../models/patientModel")
const userModel = require("../models/userModel")

const patientloginController = async(req,res)=>{
    const patient = await userModel.findOne({email:req.body.email})
    if(!patient.isPatient)
    {
        return res.status(400).send({message:"NOT A PATIENT",success:false})
    }
    if(!patient)
    {
        return res.status(200).send({message:"user not found",success:false})

    }
    const isMatch = await bcrypt.compare(req.body.password,patient.password)
    if(!isMatch)
    {
        return res.status(200).send({message:"invalid email or password", success:false})

    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: "1d"});
    
    res.status(200).send({message:'Login successful', success: true, token:token, isAdmin:user.isAdmin})
    

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
module.exports={patientloginController,patientauthController}