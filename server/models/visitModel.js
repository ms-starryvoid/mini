const mongoose = require('mongoose')
const visitSchema = new mongoose.Schema({
    patient_id:{
        type:String,
        required:[true]
    },
    asha_id:{
        type:String,
        required:[true]
    },
    day:{
        type:Date,
        required:[true]
    },
    report:{
        blood_sugar:{
            type:Number
        },
        blood_pressure:{
            type:Number
        },
        remarks:{
            type:String
        }
    }
})
const visitModel= new mongoose.model('visit',visitSchema,'visits')
module.exports=visitModel
