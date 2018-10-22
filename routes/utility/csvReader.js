const express=require('express')
const router =express.Router()
const request=require('request')
const Record =require('../../models/Record')
const csv=require('csvtojson')
const csvPath = require('../../config/urlConf').csvPath
const biorisUrl = require('../../config/urlConf').biorisUrl
const alamat = require('../../config/urlConf').alamat_lengkap
const brg=require('../../config/urlConf').brg_kaji_selidik
const isiRumah=require('../../config/urlConf').isi_rumah
const tempatKediaman=require('../../config/urlConf').tempat_kediaman
const kegunaanPejabat=require('../../config/urlConf').kegunaan_pejabat
const container=require('../../models/recSkeleton').containerInit
const fullAddr=require('../../models/recSkeleton').fullAddress
const ir=require('../../models/recSkeleton').ir
const tk=require('../../models/recSkeleton').tk
const officeUsed=require('../../models/recSkeleton').officeUsed

function registerRec(item){
    const options = {
        url: biorisUrl+'/Record',
        jar: true,
        formData:{param:JSON.stringify(item)}
    }
    return new Promise(function(resolve, reject){
        request.post(options, function (error, response, body) {
            // in addition to parsing the value, deal with possible errors
            if (error) return reject(error)
            try {
                resolve(body)
            } catch(e) {
                reject(e);
            }
        });
    });
}

router.get('/', (req,res)=>{
    const{query:{param}}=req
    const newParam=JSON.parse(param)
    csv().fromFile(alamat).then((jsonObj)=>{
        const recObj = jsonObj.map(itm=>(
            fullAddr(itm,newParam)
        ))
        getRec(recObj).then(result=>{
            csv().fromFile(isiRumah).then((jsonObj)=>{
                const recObj = jsonObj.map(itm=>(
                    ir(itm,newParam)
                ))
                getRec(recObj).then(result=>{
                    csv().fromFile(tempatKediaman).then((jsonObj)=>{
                        const recObj = jsonObj.map(itm=>(
                            tk(itm,newParam)
                        ))
                        getRec(recObj).then(result=>{
                            csv().fromFile(kegunaanPejabat).then((jsonObj)=>{
                                const recObj = jsonObj.map(itm=>(
                                    officeUsed(itm,newParam)
                                ))
                                getRec(recObj).then(result=>{
                                    res.send(result)
                                })
                            })
                        })
                    })
                })
            })
        })


  })


})
async function getRec (items) {
    let promises = []
    // let arr =[]
    let count=2
    for(const item of items){
        // arr.push(item)
        await registerRec(item).then(res=>{
             promises.push(res)
             console.log(res)
             console.log(count++)
            // arr.push(res)
        })
    }
    return promises
  }

  module.exports= router