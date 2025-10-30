import { useState } from "react"
import Button from "../components/Button"
import ButtonWraning from "../components/ButtonWarning"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import FinalMsg from "../components/FinalMsg"
import axios from "axios"
function Signup(){
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
   const[msg,setmesg]=useState("")
          return(
 <div className="bg-slate-500 h-screen flex justify-center">
    <div  className="flex flex-col justify-center">
            <div className="justify-center bg-white rounded-md p-12">
           <FinalMsg msg={msg}></FinalMsg>
          <Heading label={"SignUp"}></Heading>
          <SubHeading label={"enter your credentials to login"}></SubHeading>

          <InputBox proceed={(e) =>{
            setfirstname(e.target.value)
          }} placeholder={"abc"} label={"First name"}></InputBox>
          <InputBox proceed={(e) =>{
            setlastname(e.target.value)
          }} placeholder={"xyz"} label={"Last name"}></InputBox>
          <InputBox proceed={(e) =>{
            setemail(e.target.value)
          }} placeholder={"abc@gmail.com"} label={"email"}></InputBox>
           <InputBox proceed={(e) =>{
            setpassword(e.target.value)
          }} placeholder={"abc@123"} label={"password"}></InputBox>
           <Button proceed={async ()=>{
             const response=  await axios.post('http://localhost:3000/api/v1/user/signup',{
              firstname,
              lastname,
              email,
              password
            })
            localStorage.setItem("token",response.data.token)
            setmesg(response.data.msg)
           } 
           }  label={"Signup"}></Button>
           
           <ButtonWraning label={"Already have account?"} textnote={"signin"} to={"/Signin"}>
           </ButtonWraning>
          </div>
           </div>
</div>)
}
export default Signup