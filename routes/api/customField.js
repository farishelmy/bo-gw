const express=require('express')
const router =express.Router()
const request=require('request')
const biorisUrl = require('../../config/urlConf').biorisUrl

const customFieldEndPoint =biorisUrl+'/CustomField?param='

router.get('/', (req,res)=>{
  const{query:{param}}=req
  const url=customFieldEndPoint+param
  const options = {url: url,jar: true}

  request.get(options, function(err,respond,body){
    if(err) throw err
    return res.send(body)
  })
})

// router.post('/', (req,res)=>{
//   // console.log('post obj')
//   const{query:{param}}=req
//   const options = {
//     url: biorisUrl+'/Task',
//     jar: true,
//     form:{param:param}
//   }
//   request.post(options, function(err,respond,body){
//     if(err) throw err
//     return res.send(body)
//   })
// })


// router.delete('/', (req,res)=>{
//   // console.log('delete obj')
//   const{query:{param}}=req
//   const url=taskEndPoint+param
//   const options = {
//     url: url,
//     jar: true
//   }

//   request.delete(options, function(err,respond,body){
//     if(err) throw err
//     return res.send(body)
//   })
// })



module.exports= router