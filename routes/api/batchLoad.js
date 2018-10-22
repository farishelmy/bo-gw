const express=require('express')
const router =express.Router()
const request=require('request')
const biorisUrl = require('../../config/urlConf').biorisUrl

const batchLoadEndpoint=biorisUrl+'/BatchLoad?param='



router.get('/', (req,res)=>{
  const{param}=req.query

  const options = {
      url: batchLoadEndpoint+encodeURIComponent(param),
      jar: true
    }

  request.get(options, function(err,respond,body){

    // console.log(respond)
    if(err) throw err
    return res.send(body)
  })
})

router.post('/', (req,res)=>{
    // console.log('post obj')
    const{query:{param:parameter}}=req
    const{param,...body}=req.query
    // console.log(body)
    const url=batchLoadEndpoint+encodeURIComponent(parameter)
    const options = {
      url: url,
      jar: true,
      form:body
    }

    request.post(options, function(err,respond,body){
      if(err) throw err
      return res.send(body)
    })
  })
module.exports= router