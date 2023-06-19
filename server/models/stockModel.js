const mongoose= require('mongoose')

const stockSchema = new mongoose.Schema(
    {
        stock_id:{
            type:Number,
            
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

const stockModel = mongoose.model('Stock',stockSchema)

module.exports = stockModel