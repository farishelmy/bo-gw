const express=require('express')
const router =express.Router()
const request=require('request')
const biorisUrl = require('../../config/urlConf').biorisUrl

const recSearchEndpoint=biorisUrl+'/RecordSearch?param='

router.post('/', (req,res)=>{
    // console.log('post obj')
    const{query:{param:parameter}}=req
    const{param,...body}=req.query
    // console.log(body)
    const url=recSearchEndpoint+encodeURIComponent(parameter)
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