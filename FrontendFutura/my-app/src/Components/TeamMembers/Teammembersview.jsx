import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar'
import './TeamMembers.css'
import '../CardView.css'
import CardHeader from 'react-bootstrap/esm/CardHeader'

function Teammembersview() {
    const [teammembersview, setteammembersview] = useState([])
    const {_id}=useParams()
    const navigate=useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:5000/teammemberseachview/${_id}`).then((res)=>{
        console.log(res.data)
        setteammembersview(res.data)
      })
    }, [])
    console.log(teammembersview);

    const back=()=>{
        navigate('/teammembers')
    }

  return (
    <div className='d-flex'>
    <SideNavbar/>

    <div className='card-div'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
    <CardHeader className='card-head'>Team Member</CardHeader>
    <div>
        <Card.Title className='card-title'>Name:<Card.Text className='card-text mx-2'> {teammembersview.Name}</Card.Text></Card.Title>
        
        <Card.Title className='card-title'>Email:<Card.Text className='card-text mx-2'>{teammembersview.Email}</Card.Text></Card.Title>
        <Card.Title className='card-title'>Date Of Birth:<Card.Text className='card-text mx-2'>{teammembersview.DateOfBirth}</Card.Text></Card.Title>
        <Card.Title className='card-title'>Gender:<Card.Text className='card-text mx-2'>{teammembersview.Gender}</Card.Text></Card.Title>
        <Card.Title className='card-title'>Description:<Card.Text className='card-text mx-2'>{teammembersview.Description}</Card.Text></Card.Title>
        <Card.Title className='card-title'>Role:<Card.Text className='card-text mx-2'>{teammembersview.Role}</Card.Text></Card.Title>
        <Card.Title className='card-title'>Phone Number:<Card.Text className='card-text mx-2'>{teammembersview.PhoneNumber}</Card.Text></Card.Title>
        
        
        <Button type='submit' onClick={back}>Back</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Teammembersview