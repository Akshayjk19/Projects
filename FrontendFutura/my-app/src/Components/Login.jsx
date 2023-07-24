import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import NavigationBar from './NavigationBar'
function Login() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [showpassword, setshowpassword] = useState(false)
  const lognavi=useNavigate()

  const email=(event)=>{
    setEmail(event.target.value)
  }
  const password=(event)=>{
    setPassword(event.target.value)
  }
 

  const showbutton=(event)=>{
    setshowpassword(!showpassword)
  }

const login=async(event)=>{
event.preventDefault()

const db=await axios.post('http://localhost:5000/login',{Email,Password})
console.log(db.data)
if(!Email || !Password)
{ alert('field is empty')}
if(db.data.Token)
{
  alert('Login Successfully')
 lognavi('/SideNavbar')
  console.log('Logged IN');
}
else{
  console.log('Error');
  alert('Login Falied')
}
}

  return (
    <div>
    <NavigationBar/>
    <div className='log d-flex align-items-center justify-content-center'>
    <div className='login'>
    <h1 className='LoginText mb-3 text-center'>Admin Login</h1>
    <form className='needs-validation'>
    <div className='form-group was-validated mb-2'>
    <input className='form-control' type='email' placeholder='Email Address' value={Email} onChange={email} required/>
    <div className='invalid-feedback'>Please Enter your Email </div>
    </div>
    <div className='form-group was-validated mb-2'>
    <input className='form-control' type='password' placeholder='Password' value={Password} onChange={password} required/>
    <div className='invalid-feedback'>Please Enter your password </div>
    </div>
    <Button className='btn btn-success w-100 mt-2' onClick={login}>Login</Button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Login