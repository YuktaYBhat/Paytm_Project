import { useState } from "react"
import Button from "../components/Button"
import ButtonWraning from "../components/ButtonWarning"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import FinalMsg from "../components/FinalMsg"


function Signin(){
    const [email,setemail]=useState("")
   const [password,setpassword]=useState("")
   const[msg,setmesg]=useState("")
  
   return(
     <div className="bg-slate-500 h-screen flex justify-center">
    <div  className="flex flex-col justify-center">
        <div className="justify-center bg-white rounded-md p-12">
           <FinalMsg msg={msg}></FinalMsg>
           <Heading label={"Sign in"}></Heading>
           <SubHeading label={"enter your credentials to login"}></SubHeading>
           <InputBox proceed={(e) =>{
             setemail(e.target.value)
            }} placeholder={"abc@gmail.com"} label={"email"}></InputBox>
           <InputBox proceed={(e) =>{
            setpassword(e.target.value)
          }} placeholder={"abc@123"} label={"password"}></InputBox>
           <Button proceed={async ()=>{
             const response=  await axios.post('http://localhost:3000/api/v1/user/signin',{
              email,
              password
            })
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("name",response.data.name)
            localStorage.setItem("balance",response.data.balance)
            setmesg(response.data.msg)
          }}   label={"Signin"} ></Button>
           <ButtonWraning label={"Don't have account?"} textnote={"signup"} to={"/Signup"}>
           </ButtonWraning>
          </div>
           </div>
</div>)
}
export default Signin