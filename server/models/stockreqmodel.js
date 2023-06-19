const mongoose= require('mongoose')

const stockreqSchema = new mongoose.Schema(
    {
        requestNo: {
            type: String,
            required: true,
            unique: true,
          },
        stock_name:{
            type: String,
        ref: 'Stock',
        required: true,
        },
        patient_id:{
            type:Number
        },
        request_quantity:{
            type:Number
        },
        status:{
            type:String,
            default:'pending'
        }

    }
)

const stockreqModel =mongoose.model('Stockreq',stockreqSchema)
module.exports=stockreqModel