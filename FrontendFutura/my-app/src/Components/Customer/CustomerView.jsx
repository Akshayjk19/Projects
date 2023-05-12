import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar'
import CardHeader from 'react-bootstrap/esm/CardHeader'

function CustomerView() {
    const [customerview, setcustomerview] = useState([])
    const {_id}=useParams()
    const navig=useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:5000/customereachview/${_id}`).then((res)=>{
        setcustomerview(res.data)
      })
    }, [])
    
    console.log(customerview);
    const back=()=>{
        navig('/customer')
    }

  return (
    <div className='d-flex'>
    <SideNavbar/>
    <div className='card-div'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <CardHeader className='card-head'>Customer</CardHeader>
        <Card.Title className='card-title' >Name:<Card.Text className='card-text mx-2'>{customerview.Name}</Card.Text></Card.Title>
        <Card.Title className='card-title'>Email:<Card.Text className='card-text mx-2'>{customerview.Email}</Card.Text></Card.Title>
        <Card.Title className='card-title'>Address:<Card.Text className='card-text mx-2'>{customerview.AddressLine}</Card.Text></Card.Title>
        <Card.Title className='card-title'>City:<Card.Text className='card-text mx-2'>{customerview.City}</Card.Text></Card.Title>
        <Card.Title className='card-title'>State:<Card.Text className='card-text mx-2'>{customerview.State}</Card.Text>
        </Card.Title>
        <Card.Title className='card-title'>PinCode:<Card.Text className='card-text mx-2'>{customerview.PinCode}</Card.Text></Card.Title>
        <Card.Title className='card-title'>Country:<Card.Text className='card-text mx-2'>{customerview.PinCode}</Card.Text></Card.Title>
        <Button type='submit' onClick={back}>Back</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default CustomerView