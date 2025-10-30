//step 10
//const mongoose=require("mongoose")
const { Account } = require("../db");
const transactions=async(fromaccount,toaccount,amount)=>{
    await Account.findByIdAndUpdate(
        fromaccount,{$inc : {balance : -amount}}
    )
    await Account.findByIdAndUpdate(
        toaccount,{$inc : {balance : amount}}
    )
}
transactions("fromaccount","jj",6777)


