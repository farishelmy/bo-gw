module.exports={
  biorisUrl:'http://192.168.0.110:8081/bioris-web', //office dev
  // biorisUrl:'http://202.75.55.37:8081/bioris-web', //umah dev
  whitListUrl:['http://localhost:3000','http://localhost:8000'],
    servIp:function(){
        const os = require('os')
        const ifaces = os.networkInterfaces()
        let values = Object.keys(ifaces).map(function(name) {
          return ifaces[name]
        })
        values = [].concat.apply([], values).filter(function(val){
          return val.family == 'IPv4' && val.internal == false
        })
        return values.length ? values[0].address : '0.0.0.0'
    },
    docPath:'/Users/bizobjek_apple/Documents/test.csv',
    folderPath:'/Users/bizobjek_apple/Documents/folder.csv',
    alamat_lengkap:'/Users/bizobjek_apple/Downloads/alamat_lengkap.csv',
    isi_rumah:'/Users/bizobjek_apple/Downloads/isi_rumah.csv',
    tempat_kediaman:'/Users/bizobjek_apple/Downloads/tempat_kediaman.csv',
    isi_kediaman:'/Users/bizobjek_apple/Downloads/isi_kediaman.csv',
    brg_kaji_selidik:'/Users/bizobjek_apple/Documents/brg_kaji_selidik.csv',
    kegunaan_pejabat:'/Users/bizobjek_apple/Downloads/kegunaan_pejabat.csv'
}