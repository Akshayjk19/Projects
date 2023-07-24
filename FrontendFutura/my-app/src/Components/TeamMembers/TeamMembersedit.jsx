 import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar'
import { Button } from 'react-bootstrap'
 
 function TeamMembersedit() {
    const [Teammemberdata, setTeammemberdata] = useState([])
    const {_id}=useParams()
    const navig=useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:5000/teammemberseachview/${_id}`)
      .then((res)=>{
        setTeammemberdata(res.data)
      })
    }, [])
    console.log(Teammemberdata);
    const [Name, setName] = useState(Teammemberdata.Name)
    const [Email, setEmail] = useState(Teammemberdata.Email)
    const [DateOfBirth, setDateOfBirth] = useState(Teammemberdata.DateOfBirth)
    const [Gender, setGender] = useState(Teammemberdata.Gender)
    const [Description, setDescription] = useState(Teammemberdata.Description)
    const [Role, setRole] = useState(Teammemberdata.Role)
    const [PhoneNumber, setPhoneNumber] = useState(Teammemberdata.PhoneNumber)
    const [UploadProfilePicture, setUploadProfilePicture] = useState(Teammemberdata.UploadProfilePicture)

    const edit=()=>{
        axios.put(`http://localhost:5000/teammembersedit/${_id}`,{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,UploadProfilePicture})

        navig('/teammembers')
    }

    const back=()=>{
      navig('/Books')
      }

   return (
     <div className='d-flex'>
     <SideNavbar/>
     <div className='edit-form-div'>
     <div className='update-form'>
     <h1 className='edit-head'>Edit Teammember</h1>
     <input className='edit-inputs' type='text' Value={Teammemberdata.Name}  onChange={(e)=>setName(e.target.value)}/>
    
     
     <input className='edit-inputs' type='email'  Value={Teammemberdata.Email}  onChange={(e)=>setEmail(e.target.value)}/>
    
     <input className='edit-inputs' type='date' Value={Teammemberdata.DateOfBirth}  onChange={(e)=>setDateOfBirth(e.target.value)} />
     
     <div className='radio-div'>
     <input type='radio' className='edit-radio'  name='gender' Value='true' checked={Teammemberdata.Gender === 'true'}  onChange={(e)=>setGender(e.target.value)}/><label>Male</label>
     <input type='radio' className='edit-radio'  name='gender' Value='false' checked={Teammemberdata.Gender === 'false'}  onChange={(e)=>setGender(e.target.value)}/><label>Female</label>
     </div>
     <textarea className='edit-input-address' defaultValue={Teammemberdata.Description} onChange={(e)=>setDescription(e.target.value)}/>
    <select className='edit-dropdown' onChange={(e)=>setRole(e.target.value)}>Role
    <option Value=''>Select</option>
    <option Value={Teammemberdata.Name === 'Sales'} >Sales</option>
    <option Value={Teammemberdata.Name === 'IT'} >IT</option>
    <option Value={Teammemberdata.Name === 'Accountant'} >Accountant</option>
    </select> 
     
     <input className='edit-inputs' type='Number'  Value={Teammemberdata.PhoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)}/>
     
     <input className='edit-inputs' type='file'  Value={Teammemberdata.UploadProfilePicture}  onChange={(e)=>setUploadProfilePicture(e.target.value)}/>
    
     <div className='buton-div'>
     <Button type='submit' className='edit-button' onClick={edit} >Update</Button>
     <Button type='submit' className='edit-button mx-2' onClick={back}>Back</Button>
     </div>
     </div>
     </div>
     </div>
   )
 }
 
 export default TeamMembersedit