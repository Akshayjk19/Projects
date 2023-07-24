import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import NavigationBar from './NavigationBar'

function Signup() {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const navig=useNavigate()
 

  const fname=(event)=>{
    setFirstName(event.target.value)
  }

  const lname=(event)=>{
    setLastName(event.target.value)
  }

  const email=(event)=>{
    setEmail(event.target.value)
  }

  const paswrd=(event)=>{
    setPassword(event.target.value)
  }
  const signup=async(event)=>{
    // console.log(event);
   event.preventDefault()
const data =await axios.post('http://localhost:5000/signup',{FirstName,LastName,Email,Password})
// localStorage.setItem()
console.log(data.data)
localStorage.setItem('userinfo',JSON.stringify(data.data))
if(data.data.Token){
  console.log('Registered');
navig('/Login')
}else{
  console.log('Error');
}

  }
  
  return (
    <div>
  
    <div className='sign-form d-flex align-items-center justify-content-center'>
    <div className='sign-up'>
    <h1 className='signup-text mb-3 text-center'>Sign Up</h1>
    <form className='needs-validation'>
    <div className='form-group mb-2'>
    <input className='inputs-style form-control' type="text" placeholder='First Name' value={FirstName} onChange={fname} required/>
    </div>
    <div className='form-group mb-2'>
    <input className='inputs-style form-control' type="text" placeholder='Last Name' value={LastName} onChange={lname} required/>
    </div>
    <div className='form-group was-validation mb-2'>
    <input className='inputs-style form-control' type="email" placeholder='Email' value={Email} onChange={email} required/>
    <div className='invalid-feedback'>Please Enter your Email </div>
    </div>
    <div className='form-group mb-2'>
    <input className='inputs-style form-control' type="password" placeholder='Password' value={Password} onChange={paswrd} required/>
    </div>
    <Button className='btn ml-4 mt-2' type='submit' onClick={signup}>Signup</Button>
    <div className='text mt-2'>
    <p className='text'>If you have already Account?<a className='login-link' href='/Login'>Login</a></p>
    </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Signup