const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()

const port=82
const server='127.0.0.1'

app.use(bodyParser.urlencoded())

app.use(express.static(__dirname + '/'));

app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname+'/views/main.html'))
})

app.get('/electives',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname+'/views/electives.html'))
})

app.get('/food',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname+'/views/food.html'))
})

app.get('/advisers',(req,res)=>{
    res.send("This is advice page")
})

app.listen(port,()=>{
    console.log(`Successfully run at http://${server}:${port}`);
})