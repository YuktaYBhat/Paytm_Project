import { useNavigate } from 'react-router-dom'
import { useState } from "react"
function FinalMsgforSend({msg}){
    return(<div >
        <button className="bg-green-600 mb-7 text-white italic  rounded-md mt-6 w-50   justify center" >
            {msg} 
        </button>
        </div>)
}
export default FinalMsgforSend