import axios from 'axios'
import React, { useState } from 'react'
import SideNavbar from '../SideNavbar'
import { useNavigate } from 'react-router-dom'

function AddOrder() {
  const [FirstName, setFirstName] = useState()
  const [LastName, setLastName] = useState()
  const [OrderId, setOrderId] = useState()
  const [ProductNumber, setProductNumber] = useState()
  const [Date, setDate] = useState()
  const navig=useNavigate()

  const add=()=>{
    axios.post('http://localhost:5000/Order',{FirstName,LastName,OrderId,ProductNumber,Date})

    navig('/order')
  }

  return (
    <div className='d-flex'>
    <SideNavbar/>
    <div>
    <div>
    <input type='text' placeholder='First Name' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
    </div>
    <div>
    <input type='text' placeholder='Last Name' value={LastName} onChange={(e)=>setLastName(e.target.value)} />
    </div>
    <div>
    <input type='number' placeholder='Order Id' value={OrderId} onChange={(e)=>setOrderId(e.target.value)} />
    </div>
    <div>
    <input type='number' placeholder='Product Number' value={ProductNumber} onChange={(e)=>setProductNumber(e.target.value)} />
    </div>
    <div>
    <input type='date'  value={Date} onChange={(e)=>setDate(e.target.value)} />
    </div>
    <div>
    <button onClick={add}>Add</button>
    </div>
    </div>
    
    </div>
  )
}

export default AddOrder