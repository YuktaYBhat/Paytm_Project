//file3 :user.js
const express = require("express");

const router=express.Router()
const jwt=require("jsonwebtoken")
const cors=require("cors")
router.use(cors())
const {User,Account} = require("../db.js");
const { signinBody, updateBody} = require("./zodvalidate");
const { authjwtmid } = require("../jwtawtmid");

const {JWT_SECRET}=require("../config.js");



router.use(express.json())
// has all user routes 

async function alreadyhaveacc(req, res, next){
     const email=req.body.email
     const response=await User.findOne({
             email:email,
     })
     if(!response){
         next()
     }else{
        res.json({"msg" :"this email id is already registered"})
        return 
     }
}

//don't have account?
router.post('/signup',alreadyhaveacc,async function(req,res){
     const data=req.body
     const validinput=signinBody.safeParse(data)
     if(!validinput.success){
          res.json({"msg" :"user not valid."})
     }
     const firstname=req.body.firstname

     const lastname=req.body.lastname
     const email=req.body.email
     const password=req.body.password
     
     const user=await User.create({
             firstname:firstname,
             lastname:lastname,
             email:email,
             password:password
    })
    if(user){
     const userId=user._id
       //step11  intilaize some amount on sign up
       await Account.create({
          userId:userId,
          balance: ((Math.random() *10000) +1).toFixed(2)
        })
        const token=jwt.sign({userId:userId},JWT_SECRET)
        res.json({"msg" : "account Created successfully","token" : token})
       
     }else{
        res.json({"msg" :"cannot create user."})
     }
})

// async function isUserExsits(req, res, next){
//      const email=req.body.email
//      const password=req.body.password
//      const response=await User.findOne({
//              email:email,
//              password:password
//      })
//      if(response){
//          next()
//      }else{
//         res.json("user not found.")
//      }
// }

async function isUservalid(req, res, next){
     const data=req.body
     const validinput1=signinBody.safeParse(data)
  const validinput2=updateBody.safeParse(data) 
    if(validinput1.success || validinput2.success){
      next()
     }else{
          res.json({"msg" : "user not valid."})
     }
}

router.post('/signin',isUservalid,async function(req,res){
     const email=req.body.email
     const password=req.body.password
     const response=await User.findOne({
             email:email,
             password:password
     })
     if(response){
          const userId=response._id
          console.log(userId)
          const token=jwt.sign({userId:userId},JWT_SECRET) //each  time jwt token changes
          const person=await Account.findOne({userId :userId})
          res.json({"msg" : "loged in successfully" ,"token" : token,"name":response.firstname,"balance" : person.balance})   
     }else{
        res.json({"msg" :"user not found."})
     }
})

//step 8 .1 
router.put('/update',isUservalid,authjwtmid,async function(req,res){
     const firstname=req.body.firstname
     const lastname=req.body.lastname
     const email=req.body.email
     const password=req.body.password
     const ok= await User.updateOne({
           _id:req.userId
     },{
          firstname:firstname,
          lastname:lastname,
          email:email,
          password:password
     })
     if(ok){
              res.json("user Updated.")
     }else{
          res.send("ggggggggg")
     }

})


//step 8 .2
//?filter="hghf"
//seracher to whom to send money 


//http://localhost:3000/api/v1/user/bulk/?filter=n
//http://localhost:3000/api/v1/user/bulk/?filter=
router.get('/bulk',async function(req,res){
     const filter=req.query.filter || ""
     const users=await User.find({
          $or:[
               {
                firstname:{
                    $regex: filter
                }
               }, {
                    lastname:{
                    $regex: filter
                        }
                 }
               ]
          })
     const results= users.map(user =>({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          _id:user._id
     }))
     res.json({"user":results})
     })



module.exports=router