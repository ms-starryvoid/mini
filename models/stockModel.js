const mongoose= require('mongoose')

const stockSchema = new mongoose.Schema(
    {
        stock_id:{
            type:Number,
            required:[true,'name is required']
        },
        stock_name:{
            type:String,
            required:[true,'name is required']
        },
        quantity:{
            type:Number,
            required:[true,'name is required']
        },

    }
)
const stockreqSchema = new mongoose.Schema(
    {
        stock_id:{
            type:Number,
            required:[true,'name is required']
        },
        patient_id:{
            type:Number
        },
        request_quantity:{
            type:Number
        }

    }
)
const stockModel = mongoose.model('Stock',stockSchema)
const stockreqModel =mongoose.model('Stockreq',stockreqSchema)
module.exports = {stockModel,stockreqModel}