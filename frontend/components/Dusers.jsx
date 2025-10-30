import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

function Duser(){
      const [users,setusers]=useState([])
      const [filter, setFilter] = useState('')
      const navigate=useNavigate('')
      useEffect(()=>{
          axios.get('http://localhost:3000/api/v1/user/bulk/?filter='+filter).then(response =>{
            setusers(response.data.user)
          })
      },[filter])
    return(<div >
        <div className="flex justify-between items-center">
           <div className="flex w-full mt-2 p-3 border  ">  
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-Width="1.5" stroke="currentColor" className="size-6 justify-end">
               <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
               </svg>
               <input className="ml-2 w-full border border-white "placeholder="Serach for users" onChange={(e) => setFilter(e.target.value)}></input>
            </div>
        </div>
          <ul className="text-grey-800">
        {users.map((user)=>{
               return(
            <li key={user._id}>
                <div className=" items-center flex items-center justify-between">
           <div className=" items-center flex items-center">
                     <button className="border bg-red-600 text-white  rounded-4xl pb-3 pt-2 pr-4 pl-4 mt-4" >{user.firstname[0].toUpperCase()}</button>
            <h2 className="pt-4 pl-3"> {user.firstname}</h2> 
            </div>
        <div className=" flex justify-end items-center">
          <Button className=" p-1 mt-1 bg-blue-500 hover:bg-green-600  text-white border" proceed={(e)=>{
               
               navigate('/Send?id='+user._id+"&name="+user.firstname)
          } 
          } label={"Send Money"} >

          </Button>

       </div>
        </div>
         </li>
        )})}
           
      </ul>  
        </div>)
}
export default Duser


//<button className="border bg-red-600 text-white  rounded-4xl pb-3 pt-2 pr-4 pl-4 mt-4" >Y</button> 
    