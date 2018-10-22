const express=require('express')
const router =express.Router()
const Api =require('../../models/Api')
const SubApi =require('../../models/SubApi')

router.get('/', (req,res)=>{
    Api.find({},'-_id -__v', function(err, apis) {
        res.send(apis)
    })
})

router.get('/:record_id', (req,res)=>{
    SubApi.find({parent_id:req.params.record_id},'-_id -__v', function(err, apis) {
        res.send(apis)
    })
})




module.exports= router