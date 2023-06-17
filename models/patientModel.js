const mongoose= require('mongoose')

const patientSchema = new mongoose.Schema(
    {
        patient_id :{
            type:String,
            required:[true,"id is required"]
  
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
              required:[true,'email is required']
          },
          phone:{
              type:Number,
              required:[true,'number is required']
          },
          assignd_asha:{
            type:Number
          },
          ward_number:{type:Number},
          previous_visit:{
            visit_id:{type:Number},
            visit_date:{type:Date}
          },
          user_id:{
            type:Number
          }
          
          
  
    }
)

const patientModel = mongoose.model('Patient',patientSchema,'patient')

module.exports = patientModel