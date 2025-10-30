//cretaing db.js : import schema connect databasae
//cretae mongoose schema  for user table 
//export mongoose model from file (call it user)

//allow user to to sign up ,sign in ,update firstname,lastname ,password

//strp 9
const mongoose=require("mongoose")
const { float32, bigint, number } = require("zod")

mongoose.connect('mongodb+srv://admin:yyb123@cluster0.lrw2ab2.mongodb.net/paytm')


const UserSchema= new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})
const User=new mongoose.model('User',UserSchema)

const AccountSchema= new mongoose.Schema({
          userId:{
             type:mongoose.Schema.Types.ObjectId,
             ref:User,
             required:true
          },
          balance:{
            type:number,
            required:true

          }
})

const Account=new mongoose.model('Account',AccountSchema)

module.exports={User,Account}
//best:
// const UseSchema= new mongoose.Schema({
//     firstname:{
//          type:String,
//          required:true,
//          unique:true,
//          trim:true,
//          lowercase:true,
//          minlength:6,
//         maxlength:78
//     },
//     lastname:String,
//     email:String,
//     password:String
// })