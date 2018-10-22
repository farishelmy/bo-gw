const express=require('express')
const router =express.Router()
const request=require('request')
const biorisUrl = require('../../config/urlConf').biorisUrl
const servIp = require('../../config/urlConf').servIp()


router.get('/login',(req,res)=>{
  // console.log('req from auth')
  console.log(biorisUrl)
  const{param}=req.query

  const url=biorisUrl+'/Login?param='+param
  const options = {url: url, jar: true}
  request.get(options, function(err,respond,body){
      if(err) throw err
      const newResponse=JSON.parse(body)
      if(newResponse.results!==undefined){
        newResponse.results=Object.assign(newResponse.results[0], {server_ip:servIp+':'+req.socket.localPort})
      }
      return res.send(newResponse)

    })
})


router.get('/logout',(req,res)=>{
  // console.log('logout')
  const{param}=req.query
  const url=biorisUrl+'/bioris-web/Logout?param='+param
  const options = {url: url, jar: true}
  request.get(options, function(err,respond,body){
      if(err) throw err
      req.session.destroy()
      const {code,message}=JSON.parse(body)
      return res.send(body)


    })
})

module.exports= router