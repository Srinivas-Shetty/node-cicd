const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.json({
        "message":"Server is up",
        "status":true
    })
})

app.listen(5001,()=>{
    console.log('Server up and running on port 5001')
})