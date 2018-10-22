const mongoose = require('mongoose')
const Schema =mongoose.Schema


const apiSchema =new Schema({
    record_id:{
        type:String
    },
    title:{
        type:String
    },
    api_type:{
        type:String
    },
    details:Schema.Types.Mixed
})
module.exports=Api=mongoose.model('api',apiSchema)