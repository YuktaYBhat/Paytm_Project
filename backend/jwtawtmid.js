//step 7
const {JWT_SECRET}=require("./config.js")
const jwt=require("jsonwebtoken")

//verify using token
const authjwtmid=(req,res,next)=>{
   const authorized=req.headers.authorization
   console.log(authorized)
   if((! authorized )|| (! authorized.startsWith('Barrier '))){
         return   res.send("not authenticated")
   }
   const token=authorized.split(' ')[1]
   console.log("jjjjjjjjj " ,token)
   try{
   const verified=jwt.verify(token,JWT_SECRET)
      if(verified){
         // if(verified.userId == null){
         //   req.userId= verified.idUser //for accounts
         // }else{
         // }
         req.userId=verified.userId  //for update
         console.log(req.userId)
        next()
      }else{
          res.json("needs to be verified user")
      }
   }catch(err){
    res.send("error in verifying",err)
   }
}

module.exports={authjwtmid}