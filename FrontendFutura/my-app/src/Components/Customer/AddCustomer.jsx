import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SideNavbar from '../SideNavbar'
import { useNavigate } from 'react-router-dom'
import './AddCustomer.css'

function AddCustomer() {
    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [AddressLine, setAddressLine] = useState()
    const [City, setCity] = useState()
    const [State, setState] = useState() 
    const [PinCode, setPinCode] = useState()
    const [Country, setCountry] = useState()
    const [countryname, setcountryname] = useState([])
    const navig=useNavigate()


    useEffect(() => {
      axios.get('https://countriesnow.space/api/v0.1/countries').then((cntry)=>setcountryname(cntry.data.data))
    }, [])
    console.log(countryname);
    

    const addcustomer=()=>{
        axios.post('http://localhost:5000/customer',{Name,Email,AddressLine,City,State,PinCode,Country}).then((res)=>{
            console.log(res.data);
        })
        navig('/customer')
    }

  return (
    <div className='d-flex'>
    <SideNavbar/>
    <div className='m-auto'>
    <form className='customer-form text-center'>
    <h1 className='txt'>Add Customer</h1>
    <input type='text' placeholder='Enter Name' className='customer-inputs' value={Name} onChange={(e)=>{setName(e.target.value)}}/>
    <input type='email' placeholder='Enter Email' className='customer-inputs' value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
    
    <textarea className='customer-input-address' placeholder='Enter Address' value={AddressLine} onChange={(e)=>{setAddressLine(e.target.value)}}/>
    
    <input type='text' placeholder='Enter City' className='customer-inputs' value={City} onChange={(e)=>{setCity(e.target.value)}}/>
    <input type='text' placeholder='Enter State' className='customer-inputs' value={State} onChange={(e)=>{setState(e.target.value)}}/>
    <input type='number' placeholder='Enter Pincode' className='customer-inputs' value={PinCode} onChange={(e)=>{setPinCode(e.target.value)}}/>
    <select className='customer-dropdown' value={Country} onChange={(e)=>{setCountry(e.target.value)}}>

    <option value=''>Select</option>
    {countryname.map((res)=>(
    <option value={res.country}>{res.country}</option>
    ))}
    
    </select>
   
    <div className='customer-form-btn'>
    <button type='submit' className='btn' onClick={addcustomer}>Add</button>
    </div>
    </form>
    </div>
    </div>
  )
}

export default AddCustomer