const express=require('express')
const router =express.Router()
const request=require('request')
const biorisUrl = require('../../config/urlConf').biorisUrl
const recEndpoint =biorisUrl+'/SecurityLevel?param='

router.get('/', (req,res)=>{
  const{param, ...body}=req.query
  const{query:{param:params}}=req

  const url=recEndpoint+params
  const options = {url: url,jar: true}

  request.get(options, function(err,respond,body){
    if(err) throw err
    return res.send(body)
  })
})
/*
router.post('/', (req,res)=>{
  // console.log('post obj')
  const{query:{param}}=req
  const url=recEndpoint+param
  const options = {
    url: url,
    jar: true
  }

  request.post(options, function(err,respond,body){
    if(err) throw err
    return res.send(body)
  })
})
*/


// put method for add & update existing --PUT

//delete method for delete item = stakeholder_ids:[]

//post for add and remove groups/members


module.exports= router