import { number } from "zod"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import FinalMsgforSend from "../components/FinaMsgforamt"
const SendMoney=()=>{
  const [searchParams]= useSearchParams('')
  const id= searchParams.get("id")  
  console.log(id)
  const name=searchParams.get("name")
  console.log(name)
  const [amt,setamt]=useState(0)
   const[msg,setmesg]=useState("")
return(<div className="bg-green-300 h-screen flex justify-center ">
  <div className=" flex flex-col justify-center  ">
  <div className="bg-white p-16 items-center justify-center  ">
   <FinalMsgforSend  msg={msg}></FinalMsgforSend>
      <h1 className="text-black text-2xl font-bold italic ">Send Money To</h1>
      <div>
      <button className="border bg-red-600 text-white  rounded-4xl pb-3 pt-2 pr-4 pl-4 mt-4 " >{name[0].toUpperCase()}</button> 
         {name}
         <div>       
         <input className="border border-blue-600 p-2 mt-3 mb-3 " placeholder="enter amount in Rs. "type="number" name="" id="amount" onChange={(e)=>{setamt(e.target.value)}} />
        {console.log(amt)}
         </div>
      <button className="ml-10 p-1 mt-1 bg-green-600  text-white border hover:shadow-2xl" onClick={async()=>{
            const response=await axios.post('http://localhost:3000/api/v1/account/transfer',{
                 to:id,
                amount:amt 
                },{
                   headers:{
                      Authorization:"Barrier " + localStorage.getItem("token")
                   } 
                }
            )
            setmesg(response.data.msg)
            }} >Send Money</button>
      </div>
  </div>
  </div>
      </div>)
}
export default SendMoney