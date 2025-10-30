//step 12 : account router

//file2 :accountrouter
const express = require("express");
const { Account } = require("../db.js");
const { authjwtmid } = require("../jwtawtmid");
const { default: mongoose } = require("mongoose");

const router=express.Router()

router.get('/balance',authjwtmid,async function(req,res){
  try{
    console.log("User ID from JWT:", req.userId);
    const users= await Account.findOne({userId:req.userId})
    console.log("gggggggg")
    res.json({
        "balance" : users.balance
    })
  }catch(err){
    res.json({"msg" : err})
  }
})

router.post('/transfer',authjwtmid,async function(req,res){
    const session=await mongoose.startSession();
    session.startTransaction();
    const to=req.body.to
    const amount=req.body.amount //send your account in headers
    const fromaccount=await Account.findOne({userId:req.userId}).session(session);
    if(fromaccount.balance<amount){
        await session.abortTransaction()
        await session.endSession();
        return res.json({"msg" :"amount insuffient"})
    }
     const toaccount= await Account.findOne({userId:to}).session(session);
     if(!toaccount){
         await session.abortTransaction()
         await session.endSession();
           return res.json("account not found")
     }
     await Account.updateOne({
            userId:req.userId
     },{
      $inc : 
      {balance : -amount}
          },{session})

      await Account.updateOne({
            userId:to
          },{$inc : {balance : +amount}},{session})
          console.log(amount," ",toaccount," ",fromaccount," ",to," ",to.balance," ",fromaccount.balance," ",toaccount.balance)
          await session.commitTransaction()
          await session.endSession();

          res.json({"msg" :"amount tansfered"})
})

module.exports=router