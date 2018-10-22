const express=require('express')
const router =express.Router()
const Api =require('../../models/Api')
const SubApi =require('../../models/SubApi')

router.get('/api', (req,res)=>{
    Api.deleteMany({}, function(err) {
        if(err) throw err
        res.send('Api Collection deleted')
    })
})

router.get('/subapi', (req,res)=>{
    SubApi.deleteMany({}, function(err) {
        if(err) throw err
        res.send('Sub-Api Collection deleted')
    })
})




module.exports= router