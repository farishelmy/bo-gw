const express=require('express')
const router =express.Router()
const request=require('request')
const biorisUrl = require('../../config/urlConf').biorisUrl


router.get('/', (req,res)=>{
  const{param}=req.query
  const url=biorisUrl+'/RecordType?param='+ param
console.log(url)
  const options = {url: url,jar: true}

  request.get(options, function(err,respond,body){

    const {code,message,results}=JSON.parse(body)
    // console.log(respond)
    if(err) throw err
    if(code===200){
      return res.status(code).send(results)
    }else{
      return res.status(code).send(message)
    }
  })
})
module.exports= router