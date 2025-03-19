import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Signup from './Components/Signup'
import {Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
    
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path="/signup" element={<Signup/>} />
    </Routes>

    </>
  )
}

export default App
