const express=require('express')
const router =express.Router()
const request=require('request')
const biorisUrl = require('../../config/urlConf').biorisUrl
const contentEndpoint =biorisUrl+'/Content?param='

router.get('/', (req,res)=>{
  const{param, ...body}=req.query
  const{query:{param:params}}=req

  const url=contentEndpoint+params
  const options = {url: url,jar: true}

  request.get(options, function(err,respond,body){
    if(err) throw err
    return res.send(body)
  })
})

router.post('/', (req,res)=>{
  // console.log('post obj')
  const{query:{param}}=req
  const url=contentEndpoint+param
  const options = {
    url: url,
    jar: true,
  }

  request.post(options, function(err,respond,body){
    if(err) throw err
    return res.send(body)
  })
})
router.post('/download', (req,res)=>{
  // console.log('post obj')
  const{query:{param}}=req
  const url=contentEndpoint+param
  const options = {
    url: url,
    jar: true
  }
  request.post(options)
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream('doodle.png'))
  // request.post(options, function(err,respond,body){
  //   // console.log(respond)
  //   if(err) throw err
  //   return res.send(body)
  // })
})


// put method for add & update existing --PUT

//delete method for delete item = stakeholder_ids:[]

//post for add and remove groups/members


module.exports= router