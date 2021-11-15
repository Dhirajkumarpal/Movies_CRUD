
const express = require('express')
const  app=express();
const bodyparser=require('body-parser')
const  cookieParser = require('cookie-parser');
const shortid = require('shortid');
const session= require('express-session'); //we're using 'express-session' as 'session' here
const Bcrypt = require("bcrypt"); // 
var conn=require('./databasecon');
const movieschema=require('./Schema/movieschema.js');
var movieroutes=require('./Routes/movieroutes.js')

    


//all app.uses
app.use(bodyparser.urlencoded({ extended : true}))
app.use(express.json())
app.use(express.static('public'))
const path = require("path");
app.set("view engine", "ejs");
app.set('views','views');
//use this routes to see the list of movies
app.use('/movies',movieroutes);
app.get('/',(req,res)=>{
     res.render('Home')
    //res.send("hi the the home page")
})


//listening for request at port
const PORT=5000;
app.listen(PORT,function(){
    console.log("listening...... on port 5000");
})    


