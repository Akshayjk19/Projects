import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar'

function ViewClient() {
   
    const [view, setview] = useState([])
    const { _id }= useParams()
    const navig=useNavigate()
    
    console.log(_id);

    useEffect(() => {
        axios.get(`http://localhost:5000/vieweachclient/${_id}`).then((each)=>{
            setview(each.data)
        })
    }, [])
    
    const back=()=>{
        navig('/Client')
    }

  return (
<div className='d-flex justify-content-center align-item-center'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Name:{view.Name}</Card.Title>
        <Card.Title>Username:{view.UserName}</Card.Title>
        <Card.Title>Email:{view.Email}</Card.Title>
        <Card.Title>Signed Status:{view.SignedStatus}</Card.Title>
        <Card.Title>Role:{view.Role}</Card.Title>
        <Card.Title>Phone Number:{view.PhoneNumber}</Card.Title>
        <Button type='submit' onClick={back}>Back</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ViewClient