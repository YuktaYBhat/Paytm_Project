//file : index.js

const express = require("express");
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json());

const mainrouter = require("./router/index");//this is our main router file
app.use('/api/v1',mainrouter) 
app.listen(3000)


//any requests comes to api/v1/user go to main router
//there you will find "/user" insted of api/v1/user

//    /api/v1/user/signup
