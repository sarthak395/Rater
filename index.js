const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()

const port=80
const server='127.0.0.1'

app.use(bodyParser.urlencoded())

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')


app.get('/',(req,res)=>{
    res.status(200).render('main')
})

app.listen(port,()=>{
    console.log(`Successfully run at http://${server}:${port}`);
})