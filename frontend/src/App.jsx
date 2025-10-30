import { useState } from 'react'

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import DashBoard from '../pages/Dashboard'
import SendMoney from '../pages/Send'

//give the info when he comes at that point 
//import {DashBoard}  from './components/DashBoard';
function App() {
    return (<div>
        <BrowserRouter>
        <Routes>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Signin" element={<Signin/>}></Route> 
            <Route path="/DashBoard" element={<DashBoard/>}></Route>
            <Route path="/Send" element ={<SendMoney/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>)
}

export default App