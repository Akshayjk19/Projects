import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar'
import '../Edit.css'

function UpdateClient(){
    const [clientdata,setclientdata]=useState([])

    const {_id}=useParams()
    const navig=useNavigate()
    console.log(_id);

    useEffect(() => {
        axios.get(`http://localhost:5000/vieweachclient/${_id}`).then((clienteach)=>{
            setclientdata(clienteach.data)
        })
    }, [])
    console.log(clientdata);

    const [Name, setName] = useState(clientdata.Name)
    const [UserName, setUserName] = useState(clientdata.UserName)
    const [Email, setEmail] = useState(clientdata.Email)
    const [SignedStatus, setSignedStatus] = useState(clientdata.SignedStatus)
    const [Role, setRole] = useState(clientdata.Role)
    const [PhoneNumber, setPhoneNumber] = useState(clientdata.PhoneNumber)

    const editdata=()=>{
        axios.put(`http://localhost:5000/clientedit/${_id}`,{Name,UserName,Email,SignedStatus,Role,PhoneNumber})
        .then((data)=>{
            console.log(data.data);
        })
        navig('/Client')
    }
    const back=()=>{
      navig('/Client')
      }
    
  return (

    <div className='d-flex'>
    <SideNavbar/>
    <div className='edit-form-div'>
    <div className='update-form'>
    <h1 className='edit-head'>Edit Client</h1>
    <input  type="text" className='edit-inputs' placeholder='Name'   Value={clientdata.Name} onChange={(e)=>{setName(e.target.value)}}/>
    <input  type="text" className='edit-inputs' placeholder='Username'   Value={clientdata.UserName} onChange={(e)=>{setUserName(e.target.value)}}/>
   
    <input  type="text" className='edit-inputs' placeholder='Email'  Value={clientdata.Email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <div className='radio-div my-2'>
    <input type="radio"  className='edit-radio' aria-label="Signed"  name="status"  Value='true' checked={clientdata.SignedStatus === 'true'} onChange={(e)=>{setSignedStatus(e.target.value)}}/><lable>Signed</lable>  
    <input type="radio" className='edit-radio' aria-label="Not Signed" name="status" Value='false' checked={clientdata.SignedStatus === 'false'} onChange={(e)=>{setSignedStatus(e.target.value)}} /><lable>Not Signed</lable>
    </div>
    <select className='edit-dropdown' onChange={(e)=>{
        setRole(e.target.value)
      }}>
        <option value="">Select</option>
        <option selected={clientdata.Role==="Super Admin"} value="Super Admin">Super Admin</option>
        <option selected={clientdata.Role==="Only By Admin"} value="Only By Admin">Only By Admin</option>
      </select>

    <input  type="text" className='edit-inputs' placeholder='Phone Number'  Value={clientdata.PhoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
    <div className='buton-div'>
    <Button type='submit' className='edit-button' onClick={editdata}>Update</Button>
    <Button type='submit' className='edit-button mx-2' onClick={back}>Back</Button>
    </div>
    </div>
    </div>
    </div> 
  )
}

export default UpdateClient