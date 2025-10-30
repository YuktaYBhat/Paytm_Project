const { json } = require("body-parser");
const User = require("../db");
const zod = require('zod')
const SignupBody=zod.object({
             firstname:zod.string(),
             lastname:zod.string(),
             email:zod.email(),
             password:zod.string().min(2)
})

const signinBody=zod.object({
             email:zod.email(),
             password:zod.string().min(2)
})

const updateBody=zod.object({
             firstname:zod.string().optional(),
             lastname:zod.string().optional(),
             email:zod.email(),
             password:zod.string().min(2) 
})

module.exports={
    signinBody,SignupBody,updateBody
}