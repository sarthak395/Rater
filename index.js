//INCLUDING STUFF
const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()
const mongoose=require('mongoose');

//CONNECTING TO MONGODB
mongoose.connect('mongodb://localhost:27017/test')

//Storing Course information
const CourseSchema=new mongoose.Schema({
    Year:Number,
    Semester:String,
    Programme:String,
    Course_name:String
});

const course=mongoose.model('Course',CourseSchema) //collection is course

// course.findOne({Year: 1, Semester: "Spring" , Programme: "CSE", Course_name: "Computer Programming" },function(err,findnewcourse){
//     console.log(findnewcourse.Year)
// })


//PORT INFORMATION
const port=82
const server='127.0.0.1'

//EXPRESS STUFF
app.use(bodyParser.urlencoded())
app.use(express.static(__dirname + '/'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug')

//BACKEND ROUTES
app.get('/',(req,res)=>{
    res.status(200).render('main')
})
app.get('/electives',(req,res)=>{
    res.status(200).render('electives',{list:''})
})
app.post('/electives',(req,res)=>{
    var data=req.body
    course.find({Year:`${data.Year}`,Semester:`${data.Semester}`,Programme:`${data.Programme}`},function(err,courses){
        res.status(200).render('electives',{list:courses})
    })
    
})
app.get('/food',(req,res)=>{
    res.status(200).render('food')
})
app.get('/advisers',(req,res)=>{
    res.send("This is advice page")
})


//LISTENING TO PORT
app.listen(port,()=>{
    console.log(`Successfully run at http://${server}:${port}`);
})