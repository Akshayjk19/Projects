import axios from 'axios'
import React, { useState } from 'react'
import SideNavbar from '../SideNavbar'
import { useNavigate } from 'react-router-dom'

function AddTeammembers() {
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [DateOfBirth, setDateOfBirth] = useState()
    const [Gender, setGender] = useState()
    const [Description, setDescription] = useState()
    const [Role, setRole] = useState()
    const [PhoneNumber, setPhoneNumber] = useState()
    const [UploadProfilePicture, setUploadProfilePicture] = useState()
    const navig =useNavigate()
    const Add=()=>{
        axios.post('http://localhost:5000/teammembers',{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber,UploadProfilePicture})

        navig('/teammembers')
    }
  return (
    <div className='d-flex'>
    <SideNavbar/>
    <div>
    <div>
    <div>
    <input type='text' value={Name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div>
    <input type='email' value={Email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div>
    <input type='date' value={DateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} />
    </div>
    <div>
    <div>
    <label>Male</label>
    <input type='radio'  name='gender' Value='true' checked={Gender === "true"}
    onChange={(e)=>{
      setGender(e.target.value)
    }}/>
    </div>
    <div>
    <label>Female</label>
    <input type='radio'  name='gender' Value='false' checked={Gender === "true"}
    onChange={(e)=>{
      setGender(e.target.value)
    }} />
    </div>
    </div>
    <div>
    <textarea value={Description} onChange={(e)=>setDescription(e.target.value)}/>
    </div>
    <div>
   <select value={Role} onChange={(e)=>setRole(e.target.value)} >Role
   <option Value=''>Select</option>
   <option value='Sales'>Sales</option>
   <option value='IT'>IT</option>
   <option value='Accountant' >Accountant</option>
   </select> 
    </div>
    <div>
    <input type='Number'  value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
    </div>
    <div>
    <input type='file' value={UploadProfilePicture} onChange={(e)=>setUploadProfilePicture(e.target.value)}/>
    </div>
    </div>
    <div>
    <button type='submit' onClick={Add}>Add</button>
    </div>
    </div>
    </div>
  )
}

export default AddTeammembers