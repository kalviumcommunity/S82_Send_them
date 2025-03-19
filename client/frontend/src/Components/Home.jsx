import React, { useEffect, useState } from 'react'
import MemeGen from './MemeGen'

function Home() {
  const [users,setUsers] = useState([])
  useEffect(()=>{
fetch("http://localhost:5000/get-data").then(res=>res.json()).then(data=>setUsers(data))

  },[])
  return (
    <div>
      List Of Users:
      {users.map((item)=>(
        <p>{item.name}</p>
        
      ))}
      
      

    </div>
  )
}

export default Home
