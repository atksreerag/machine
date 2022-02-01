const express = require('express')
const app = express()
const db = require('./config/connection')
const indexRouter = require('./routes/index')
var bodyParser = require('body-parser');

app.use(bodyParser());
db.connect().then((data)=>{
    console.log('database connected');
    
}).catch((err)=>{
    console.log(err);
    
})
app.use('/',indexRouter)
app.use(express.json())
app.listen(3000,()=>{
    console.log("server connected on port 3000");
    })