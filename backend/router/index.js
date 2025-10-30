//crete new file backend\router\index.js exprort new express router
const express = require("express");

const userrouter = require("./user.js");//called as userRouter
const accountrouter=require("./accountrouters.js")

const router=express.Router()

router.use('/user',userrouter)
router.use('/account',accountrouter)


module.exports=router



