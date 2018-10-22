const express=require('express')
const router =express.Router()
const request=require('request')
const biorisUrl = require('../../config/urlConf').biorisUrl

const auditLogEndpoint=biorisUrl+'/Audit?param='



router.get('/', (req,res)=>{
  const{param}=req.query

  const options = {
      url: auditLogEndpoint+encodeURIComponent(param),
      jar: true
    }

  request.get(options, function(err,respond,body){

    // console.log(respond)
    if(err) throw err
    return res.send(body)
  })
})


module.exports= router