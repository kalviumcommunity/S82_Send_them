import React, { useState } from 'react'
import axios from "axios"

function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const onHandleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/userauth/login',{email:email,password:password}).then((res)=>{
        console.log(res.data)
        }).catch((err)=>console.log(err))
            
        

    }
  return (

    <div>
        <form action="">
        
            <input type="email" onChange={e=>setEmail(e.target.value)}/><br />
            <input type="password" onChange={e=>setPassword(e.target.value)} /> <br />
            <button type='submit' onClick={onHandleSubmit}> Login</button>
        
        </form>
      
    </div>
  )
}

export default Login
