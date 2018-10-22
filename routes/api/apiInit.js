const express=require('express')
const router =express.Router()
const request=require('request')
const biorisUrl = require('../../config/urlConf').biorisUrl
const Api =require('../../models/Api')
const SubApi =require('../../models/SubApi')

const recSearchEndpoint=biorisUrl+'/RecordSearch?param='



function iterateRecSummary(item){
    const recParam={
        action:"SUMMARY",
        bio_access_id:item.bioId,
        record_id:item.record_id}

    const options = {
        url: biorisUrl+'/Record?param='+encodeURIComponent(JSON.stringify(recParam)),
        jar: true
    }
    return new Promise(function(resolve, reject){
        request.get(options, function (error, response, body) {
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

async function initAPIModule (items) {
    let promises = []
    // let arr =[]
    // let count=2

        for(const item of items){
            await iterateRecSummary(item).then(res=>{
                const {results:[{section_field}]}=JSON.parse(res)


                const apiObj=Object.assign({}, ...section_field.map(itm => ({[itm.custom_field_label.toLowerCase()]:itm.value})))
                 promises.push({
                    title:item.title,
                    record_id:item.record_id,
                    api_type:item.type,
                    details:apiObj
                })
            })
        }


    return promises
  }

  async function initAPISubModule (items) {
    let promises = []
    // let arr =[]
    // let count=2

        for(const item of items){
            await iterateRecSummary(item).then(res=>{
                const {results:[{parent_id,section_field}]}=JSON.parse(res)
                // console.log(res)
                const apiObj=Object.assign({}, ...section_field.map(itm => ({[itm.custom_field_label.toLowerCase()]:itm.value})))
                // console.log(apiObj)
                 promises.push({
                    title:item.title,
                    record_id:item.record_id,
                    parent_id:item.parentId,
                    api_type:item.type,
                    details:apiObj
                })
            })
        }


    return promises
  }

router.get('/', (req,res)=>{
//   const{param}=req.query
  const loginObj={
    username:'api',
    password:'api123',
    repository_id:'repo3',
    language_id:"en_US"
    }
  const url=biorisUrl+'/Login?param='+encodeURIComponent(JSON.stringify(loginObj))

  const options = {url: url, jar: true}

  request.get(options, function(err,respond,body){
      if(err) throw err
      const {code,message,results:bioRes}=JSON.parse(body)
      const searchParam = {
        bio_access_id:bioRes[0].bio_access_id,
        action:'ADVANCED_SEARCH_PAGING',
        query:`owner_id:%22quostr%3B${bioRes[0].stakeholder_id}%22quostr%3B`,
        record_type_ids:['rect-9a27608e1321422bb8af8e43222fa87c']
    }
    //   const recUrl=recSearchEndpoint+encodeURIComponent(JSON.stringify(searchParam))
      request.post({
          url:recSearchEndpoint+encodeURIComponent(JSON.stringify(searchParam)),
          jar:true,
          form:{page:0,start:0,limit:100}
        }, function(err,respond,body){
            if(err) throw err
            const {code,message,results}=JSON.parse(body)
            const apiList=results.map(itm=>({
                title:itm.title,
                record_id:itm.record_id,
                type:itm.record_type_title,
                bioId:bioRes[0].bio_access_id
            }))
            // console.log(apiList)
             initAPIModule(apiList).then(rec=>Api.create(rec))
             searchParam.record_type_ids=['rect-18c3b793bcd54a27baba3eb7ebddc5b8']

            // return res.send(results)

                request.post({
                    url:recSearchEndpoint+encodeURIComponent(JSON.stringify(searchParam)),
                    jar:true,
                    form:{page:0,start:0,limit:100}
                }, function(err,respond,body){
                    if(err) throw err
                    const {code,message,results}=JSON.parse(body)
                    // console.log(results)
                    const apiList=results.map(itm=>({
                        title:itm.title,
                        record_id:itm.record_id,
                        parentId:itm.parent_id,
                        type:itm.record_type_title,
                        bioId:bioRes[0].bio_access_id
                    }))
                    //   console.log(apiList)
                    initAPISubModule(apiList).then(rec=>{
                        SubApi.create(rec)
                        const option={
                            url:biorisUrl+'/Logout?param='+encodeURIComponent(JSON.stringify({bio_access_id:bioRes[0].bio_access_id})),
                            jar:true
                        }
                        request.get(option, function(err,respond,body){
                            if(err) throw err
                            console.log(body)
                        })
                    })

                    return res.send('API list updated')
                })

    })
})

})

module.exports= router