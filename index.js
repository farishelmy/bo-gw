const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const compress =require('compression')
const helmet=require('helmet')
const morgan = require('morgan')
const addRequestId = require('express-request-id')()

const db=require('./config/key').mongoURI

const auth =require('./routes/api/auth')
const tasks=require('./routes/api/tasks')
const recordType=require('./routes/api/recordType')
const record=require('./routes/api/record')
const stakeh=require('./routes/api/stakeholder')
const taskInstance=require('./routes/api/taskInstance')
const recSearch=require('./routes/api/recSearch')
const batchLoad=require('./routes/api/batchLoad')
const batchLog=require('./routes/api/batchLog')
const auditLog=require('./routes/api/auditLog')
const content=require('./routes/api/content')

const roles=require('./routes/api/roles') //new
const SecurityLevel=require('./routes/api/securityLevel') //new
const emailTemplate=require('./routes/api/emailTemplate') //new
const customField=require('./routes/api/customField') //new



const apiInit=require('./routes/api/apiInit')
const apiList=require('./routes/api/apiList')
const apiClear=require('./routes/api/apiClear')
// const csvReader=require('./routes/utility/csvReader')
const port = process.env.PORT || 8000
const app = express()

app.use(session({
  key: 'mySession',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {httpOnly: true}
}))

//security middleware
app.use(compress())
app.use(helmet())
//body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//db connection
// mongoose.connect(db,{useNewUrlParser: true})
//   .then(()=>console.log('db connected'))
//   .catch(err=>console.log(err))

//logger middleware
app.use(addRequestId)

morgan.token('id', function getId(req) {
    return req.id
});

const loggerFormat = ':remote-addr - :remote-user :id [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode >= 400
    },
    stream: process.stdout
}))

//cors config
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
  // console.log('norm req')
  console.log(req.url)
  if(req.method==='OPTIONS'){
    // console.log('this is options')
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return res.status(200).json({})
  }
  next();
});

//use routes
//auth,task,stakeholder,record,recordType(read-only)
app.use('/api/auth', auth)
app.use('/api/tasks', tasks)
app.use('/api/recordType', recordType)
app.use('/api/record', record)
app.use('/api/stakeholder', stakeh)
app.use('/api/taskInstance', taskInstance)
app.use('/api/recSearch', recSearch)
app.use('/api/batchLoad', batchLoad)
app.use('/api/batchLog', batchLog)
app.use('/api/auditLog', auditLog)
app.use('/api/content', content)

app.use('/api/roles', roles) //new
app.use('/api/SecurityLevel', SecurityLevel) //new
app.use('/api/emailTemplate', emailTemplate) //new
app.use('/api/customField', customField) //new


app.use('/api/apiInit', apiInit)
app.use('/api/apiList', apiList)
app.use('/api/apiClear', apiClear)
// app.use('/utility/csvReader', csvReader)


app.get('/', (req, res) => {

  // console.log(req.cookies)
  if(req.session.page_views){
    req.session.page_views++
    res.send("You visited this page " + req.session.page_views + " times")
 } else {
    req.session.page_views = 1
    res.send("Welcome to this page for the first time!")
 }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})