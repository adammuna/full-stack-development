import mongoose from "mongoose";
import express from "express";
const app = express()
const path =require('path')
app.use(express.json())

app.get(
    "/greet",
    function (req,res){
        res.send(msg:'hello world')
    }
)
app.post(
    "/greet",
    function (req,res){
        const{body,headers} = req
        console.log(headers.name +'says' + body.msg);
        res.send('thanks for your message')
    }
)
app.listen(3001,function(){
    console.log('up and running on port 3001');
})
