const mongoose= require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'name is required']
        },
        email:{
            type:String,
            required:[true,'name is required']
        },
        password:{
            type:String,
            required:[true,'name is required']
        },
        ashaid:{
            type:String,
            default:'0'
        },
        patientid:{
            type:String,
            default:'0'

        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        isAsha:{
            type:Boolean,
            default:false
        },
        isPatient:
        {
            type:Boolean,
            default:false
        }

    }
)

const userModel = mongoose.model('Users',userSchema)


module.exports = userModel