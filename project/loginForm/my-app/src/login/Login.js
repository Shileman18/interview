import React, { useState } from 'react'
import axios from "axios";



function Login() {
const [email,setEmail]=useState('');
const [otp,setotp]=useState('')

const sendotp=async()=>{
  try{
    await axios.post("http://localhost:5000/sendotp",{email})
  }catch(error){
    console.error("error sending opt ",error)

  } 
}
const varifyotp=async()=>{
  try{
    await axios.post("http://localhost:5000/sendotp",{email,otp})
alert("otp varified")
setEmail("")
setotp("")
  }catch(error){
    console.error("error varify  opt ",error)

  } 
}


  return (
    <div>
<div>
  <h2>send otp</h2>
  <input type="email"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}/>
  <button onClick={sendotp}>send otp</button>
  <input type="text"
  value={otp}
  onChange={(e)=>setotp(e.target.value)}/>
  <button onClick={varifyotp}>varifyotp</button>

</div>
    </div>
  )
}

export default Login