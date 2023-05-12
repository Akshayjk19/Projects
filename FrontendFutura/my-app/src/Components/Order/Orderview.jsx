import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar'
import CardHeader from 'react-bootstrap/esm/CardHeader'

function Orderview() {
    const [orderview, setorderview] = useState([])
    const {_id}=useParams()
    const navig=useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:5000/Ordereachview/${_id}`).then((res)=>{
        setorderview(res.data)
      })
    }, [])
    console.log(orderview);

    const back=()=>{
        navig('/order')
    }
    
  return (
    <div className='d-flex'>
    <SideNavbar/>
    <div className='card-div'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <CardHeader className='card-head'>Order</CardHeader>
        <Card.Title >First Name:{orderview.FirstName}</Card.Title>
        <Card.Title>Last Name:{orderview.LastName}</Card.Title>
        <Card.Title>OrderId:{orderview.OrderId}</Card.Title>
        <Card.Title>Product Number:{orderview.ProductNumber}</Card.Title>
        <Card.Title>Date:{orderview.Date}</Card.Title>
        <Button type='submit' onClick={back}>Back</Button>
      </Card.Body>
      </Card>
    </div>
    </div>
  )
}

export default Orderview