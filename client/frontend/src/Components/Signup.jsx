import React, { useState } from 'react'

function Signup() {
  const [name,setName] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const userData = {name:name,email:email,phoneNumber:Number(phoneNumber),password:password};
    try{
        const resp = await fetch("http://localhost:5000/data",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userData),
        })
    }
    catch(e){
        console.log(e);
    }
  }
    return (
    <div>
        <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="number" placeholder="NUmber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
        </form>
      
    </div>
  )
}

export default Signup
