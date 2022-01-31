const express = require('express')

const app = express()


app.listen(4445, ()=>{
    console.log('Server started on http://localhost:4445/')
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})