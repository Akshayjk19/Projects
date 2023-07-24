import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './UserReg.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout'


function UserReg() {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const navig=useNavigate()
 

  
  const signup=async(event)=>{
    
   event.preventDefault()

const data =await axios.post('http://localhost:5000/userregistration',{FirstName,LastName,Email,Password})

console.log(data.data)

if(!FirstName || !LastName || !Email || !Password)
{
  alert('Field is empty')
}else if(data.data.Token){
  console.log('Registered');

  toast.success('Registration Successfully Done')
navig('/userlogin')
// localStorage.setItem('userinfo',JSON.stringify(data.data))
}else{
  alert('User Already Exist')
  console.log('Error');
}


  }
  
  return (
    <Layout>
    <div style={{backgroundColor:'black',height:'100vh'}}>
     
    <div className='user-sign-up-form'>
    <div className='user-sign-up'>
    <h1 className='user-signup-text mb-3 text-center'>Sign Up</h1>
    <form className='needs-validation' noValidate >
    <div className='form-group was-validated mb-2'>
    <input className='inputs-style form-control' type="text" placeholder='First Name' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} required/>
    <div className='invalid-feedback'>Please Enter your First Name </div>
    </div>
    <div className='form-group was-validated mb-2'>
    <input className='inputs-style form-control' type="text" placeholder='Last Name' value={LastName} onChange={(e)=>setLastName(e.target.value)} required/>
    <div className='invalid-feedback'>Please Enter your Last Name </div>
    </div>
    <div className='form-group was-validated mb-2'>
    <input className='inputs-style form-control' type="email" placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)} required/>
    <div className='invalid-feedback'>Please Enter your Email </div>
    </div>
    <div className='form-group was-validated mb-2'>
    <input className='inputs-style form-control' type="password" placeholder='Password' value={Password} onChange={(e)=>setPassword(e.target.value)} required/>
    <div className='invalid-feedback'>Please Enter your password </div>
    </div>
    <Button className='btn ml-4 mt-2' type='submit' onClick={signup}>Signup</Button>
    <div className='text mt-2'>
    <p className='text'>If you have already Account?<a className='login-link' href='/userlogin'>Login</a></p>
    </div>
    </form>
    </div>
    </div>
    

    </div>
    </Layout>
  )
}

export default UserReg