import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar'

function Orderedit() {
    const [Orderdata, setOrderdata] = useState([])
    const {_id}=useParams()
    const navig=useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:5000/Ordereachview/${_id}`).then((res)=>{
        setOrderdata(res.data)
      })
      
    }, [])

    const [FirstName, setFirstName] = useState(Orderdata.FirstName)
    const [LastName, setLastName] = useState(Orderdata.LastName)
    const [OrderId, setOrderId] = useState(Orderdata.OrderId)
    const [ProductNumber, setProductNumber] = useState(Orderdata.ProductNumber)
    const [Date, setDate] = useState(Orderdata.Date)

    const update=()=>{
        axios.put(`http://localhost:5000/Orderedit/${_id}`,{FirstName,LastName,OrderId,ProductNumber,Date})

        navig('/order')
    }
    

  return (
    <div className='d-flex'> 
    <SideNavbar/>
    <div>
    <div>
    <input type='text' Value={Orderdata.FirstName} onChange={(e)=>setFirstName(e.target.value)} />
    </div>
    <div>
    <input type='text' Value={Orderdata.LastName} onChange={(e)=>setLastName(e.target.value)} />
    </div>
    <div>
    <input type='number' Value={Orderdata.OrderId} onChange={(e)=>setOrderId(e.target.value)} />
    </div>
    <div>
    <input type='number' Value={Orderdata.ProductNumber} onChange={(e)=>setProductNumber(e.target.value)} />
    </div>
    <div>
    <input type='date' Value={Orderdata.Date} onChange={(e)=>setDate(e.target.value)} />
    </div>
    <div>
    <button onClick={update}>Update</button>
    </div>
    </div>
    </div>
  )
}

export default Orderedit