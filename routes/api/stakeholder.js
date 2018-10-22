const express=require('express')
const router =express.Router()
const request=require('request')
const biorisUrl = require('../../config/urlConf').biorisUrl

const stakehEndpoint =biorisUrl+'/Stakeholder?param='

router.get('/', (req,res)=>{
  const{query:{param}}=req
  const url=stakehEndpoint+param
  const options = {url: url,jar: true}

  request.get(options, function(err,respond,body){
    if(err) throw err
    return res.send(body)
  })
})

router.post('/', (req,res)=>{
  // console.log('post obj')
  const{query:{param}}=req
  const url=stakehEndpoint+param
  const options = {
    url: url,
    jar: true
  }

  request.post(options, function(err,respond,body){
    if(err) throw err
    return res.send(body)
  })
})

router.put('/', (req,res)=>{
  // console.log('post put')
  const{query:{param}}=req

  const url=stakehEndpoint+param

  const options = {
    url: url,
    jar: true
  }

  request.put(options, function(err,respond,body){
    if(err) throw err
    return res.send(body)
  })
})


router.delete('/', (req,res)=>{
  // console.log('delete obj')
  const{query:{param}}=req
  const url=stakehEndpoint+param
  const options = {
    url: url,
    jar: true
  }

  request.delete(options, function(err,respond,body){
    if(err) throw err
    return res.send(body)
  })
})



module.exports= router