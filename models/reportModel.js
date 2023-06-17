const mongoose= require('mongoose')
const reportSchema = new mongoose.Schema(
    {
        report_id:{
            type:String,
            required:[true,'name is required']
        },
        patient_id:{
            type:String,
            required:[true,'name is required']
        },
        name:{
            type:String
        },
        report:{
            date:{
                type:Date,

            },
            observation:{
                type:String
            }
        },

    }
)
const reportModel =mongoose.model('Report',stockreqSchema)
module.exports={reportModel}