const express = require('express')

const path = require('path')
const app = express();

const port = 5001;

app.use(express.static(path.join(__dirname, 'public/test')));


app.get('/',(req,res)=>{
    res.sendFile('test.html')
})


app.listen(port,()=>{
    console.log(port)
})