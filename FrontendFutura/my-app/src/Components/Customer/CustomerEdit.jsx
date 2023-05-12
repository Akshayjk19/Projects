import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar'
import { Button } from 'react-bootstrap'

function CustomerEdit() {
    const [customerdata, setcustomerdata] = useState([])

    const {_id}=useParams()
    const navig=useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:5000/customereachview/${_id}`).then((res)=>{
        setcustomerdata(res.data)
      })
    }, [])

    const [Name, setName] = useState(customerdata.Name)
    const [Email, setEmail] = useState(customerdata.Email)
    const [Address, setAddress] = useState(customerdata.AddressLine)
    const [City, setCity] = useState(customerdata.City)
    const [State, setState] = useState(customerdata.State)
    const [PinCode, setPinCode] = useState(customerdata.PinCode)
    const [Country, setCountry] = useState(customerdata.Country)
    const [countryname, setcountryname] = useState([])

    useEffect(() => {
      axios.get('https://countriesnow.space/api/v0.1/countries').then((cntry)=>setcountryname(cntry.data.data))
    }, [])
    console.log(countryname);

    const editcustomer=()=>{
      axios.put(`http://localhost:5000/customeredit/${_id}`,{Name,Email,Address,City,State,PinCode,Country}).then((res)=>{
        console.log(res.data);
      })
      navig('/customer')
    }
    const back=()=>{
      navig('/customer')
      }
    

  return (
    <div className='d-flex'>
    <SideNavbar/>
    <div className='edit-form-div'>
    <div className='update-form'>
    <h1 className='edit-head'>Edit Customer</h1>
    <input className='edit-inputs'  type="text"  placeholder='Name'  value={customerdata.Name} onChange={(e)=>setName(e.target.value)} />
    <input className='edit-inputs'  type="email" placeholder='Email' value={customerdata.Email} onChange={(e)=>setEmail(e.target.value)} />
    <textarea className='edit-input-address' placeholder='Enter Address' value={customerdata.AddressLine} onChange={(e)=>setAddress(e.target.value)}/>
    <input className='edit-inputs'  type="text" placeholder='City' value={customerdata.City} onChange={(e)=>setCity(e.target.value)} />
    <input className='edit-inputs'  type="text" placeholder='State'  value={customerdata.State} onChange={(e)=>setState(e.target.value)}/>
    <input className='edit-inputs'  type="number" placeholder='Pincode' value={customerdata.PinCode} onChange={(e)=>setPinCode(e.target.value)} />

    <select className='edit-dropdown' Value={customerdata.Country} onChange={(e) => setCountry(e.target.value)}>
        {countryname.map((res)=>(
          <option key={res.country} value={res.country} selected={customerdata.Country === res.country}>
          {res.country}
        </option>
          ))}
      </select>
      <div className='buton-div'>
    <Button type='submit' className='edit-button' onClick={editcustomer} >Update</Button>
    <Button type='submit' className='edit-button mx-2' onClick={back}>Back</Button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CustomerEdit