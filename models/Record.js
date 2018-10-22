const mongoose = require('mongoose')
const Schema =mongoose.Schema

const section =new Schema({

})
//create schema
const recSchema = new Schema({
    record_id:{
        type:String,
        default:null
    },
    record_type_id:{
        type:String,
        default:null
    },
    parent_id:{
        type:String,
        default:null
    },
    classification_id:{
        type:String,
        default:null
    },
    thesaurus_id:{
        type:String,
        default:null
    },
    stakeholder_id:{
        type:String,
        default:null
    },
    title:{
        type:String,
        default:null
    },
    is_final:{
        type:Boolean,
        default:null
    },
    is_check_out:{
        type:Boolean,
        default:null
    },
    user_defined_field:{
        type:String,
        default:null
    },
    record_no:{
        type:String,
        default:null
    },
    acl_entries:{
        type:String,
        default:null
    },
    record_metadata: Schema.Types.Mixed
})

module.exports=Record=mongoose.model('record',recSchema)