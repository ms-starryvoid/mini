const mongoose= require('mongoose')

const ashaSchema = new mongoose.Schema(
    {
        asha_id :{
          type:String,
          required:[true,"asha worker id is required"]

        },
        name:{
            type:String,
            required:[true,'name is required']
        },
        age:{
            type:Number
  
          },
          gender :{
            type:String,
            required:[true,"asha worker id is required"]
  
          },
          address:{
            housen:{
                type:String
            },
            street:{
                type:String
            },
            po:{
                type:String
            }
  
          },
        email:{
            type:String,
           
        },
        phone:{
            type:Number,
            required:[true,'number is required']
        },
        ward_number:{
            type:Number,
            default:1
        },
        dob:{
            type:Date
          }

    }
)

const ashaModel = mongoose.model('ashadata',ashaSchema,'ashadata')

module.exports = ashaModel