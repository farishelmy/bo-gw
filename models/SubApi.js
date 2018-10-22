const mongoose = require('mongoose')
const Schema =mongoose.Schema


const subApiSchema =new Schema({
    parent_id:{
        type:String
    },
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
module.exports=SubApi=mongoose.model('subapi',subApiSchema)