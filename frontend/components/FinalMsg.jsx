import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
function FinalMsg({msg}){
    return(<div >
        <button className="bg-green-600 mb-7 text-white italic  rounded-md mt-6 w-50   justify center" >
            {msg} 
        </button>
        <NextTo msg={msg}/>
        </div>)
}
function NextTo({msg}){
 
    console.log({msg})
if(msg==("loged in successfully")){
 return(<div>
  <a href="http://localhost:5173/Dashboard" className='text-blue-400 underline italic'>Go to Dashboard</a>
  
 </div>)
}
    return null
}
export default FinalMsg


//not working

//     const [display,setdisplay]=useState("to be removed")
//     const token =localStorage.getItem("token")
//     const navigate=useNavigate('')
//    console.log(token)


  // setdisplay("Go to Dashboard") 
  //problem


//    if(token !== null && token !== 'undefined' && token !== 'null'){
//        return(<div>
//         <Buttons className=" mt-1 bg-blue-500 hover:bg-green-600  text-white border" proceed={(e)=>{
//             navigate('/Dashboard')
//         } 
//      } label={display} />
//     </div>)
//    }
//    return null
// }
// function Buttons({label,proceed}){
//     return(<div >
//         <button className="bg-black text-white italic border mt-6  w-50  justify center" onClick={proceed}>
//             {label}
//         </button>