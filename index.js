//INCLUDING STUFF
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const mongoose = require('mongoose');
const { METHODS } = require('http');

//GLOBAL STUFF
var username_ = "";
var loggedinflag = 0;

//CONNECTING TO MONGODB
mongoose.connect('mongodb://localhost:27017/test')

//MONGO DATABASE INFORMATION

//Storing Course information
const CourseSchema = new mongoose.Schema({
    Year: Number,
    Semester: String,
    Programme: String,
    Course_name: String,
    Rating: Number
});

const userschema = new mongoose.Schema({
    Username: String,
    Password: String,
    FullName: String,
    Email: String
});

const course = mongoose.model('Course', CourseSchema) //collection is course
const user = mongoose.model('User', userschema)

//PORT INFORMATION
const port = 82
const server = '127.0.0.1'

//EXPRESS STUFF
app.use(bodyParser.urlencoded())
app.use(express.static(__dirname + '/'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

//BACKEND ROUTES
app.get('/', (req, res) => {
    username_ = username_.charAt(0).toUpperCase() + username_.slice(1)
    res.status(200).render('main', { username: username_ })
})
app.get('/logout',(req,res)=>{
    username_=""
    res.status(302).redirect('/')
})
app.get('/electives', (req, res) => {
    if(username_=="")
        res.status(301).redirect('/login')
    else
        res.status(200).render('electives', { list: '' })
})
app.post('/electives', (req, res) => {
    var data = req.body
    course.find({ Year: `${data.Year}`, Semester: `${data.Semester}`, Programme: `${data.Programme}` }, function (err, courses) {
        res.status(200).render('electives', { list: courses })
    })
})
app.post('/electives/:id', (req, res) => {
    res.redirect(`/electives/${req.params.id}/${req.body.rating}`)
})
app.get('/electives/:id/:rating', (req, res) => {
    //we have coursename and it's ratings
    
    course.findOne({ _id: req.params.id },function(err,doc){
        newrating = (doc.Rating+req.params.rating)%6
        doc.Rating=newrating
        doc.save()
        res.send("Thanks for Voting Your Vote doesnt count")
    });
})


app.get('/food', (req, res) => {
    if(username_=="")
        res.status(301).redirect('/login')
    else
        res.status(200).render('food')
})
app.get('/advisers', (req, res) => {
    res.send("This is advice page")
})
app.get('/login', (req, res) => {
    res.status(200).render('login')
})
app.post('/login', (req, res) => {
    //verify user
    const data = req.body
    const enterpass = data.password
    user.find({ Username: `${data.usr_name}` }, function (err, info) {
        const actualpass = info[0].Password;
        if (actualpass != enterpass)
            res.status(200).render('login',{warning:"Wrong Password"})
        else {
            loggedinflag = 1;
            username_ = info[0].FullName
            res.status(200).redirect('/')
        }
    });
})
app.get('/signup', (req, res) => {
    res.status(200).render('signup')
})
app.post('/signup', (req, res) => {
    var data = req.body
    const tempuser = new user(data)
    tempuser.save()
    res.status(301).redirect('/login')
})



//LISTENING TO PORT
app.listen(port, () => {
    console.log(`Successfully run at http://${server}:${port}`);
})