import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import '../CardView.css'

function ViewBookData() {
  const [viewdata, setviewdata] = useState([])

  const {_id}=useParams()
  const navig=useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:5000/eachbook/${_id}`).then((view)=>{
      setviewdata(view.data)
    })
  }, [_id])
  
  const back=()=>{
    navig('/Books')
  }

  return (
    <div className='d-flex' >
    <SideNavbar/>
    <div className='card-div'>
     <Card style={{ width: '18rem' }}>
    <Card.Body >
    <CardHeader className='card-head'>Book</CardHeader>
    <div className='card-inputs'>
      <Card.Title className='card-title'>Book Name: <Card.Text className='card-text mx-2'>{viewdata.BookName}</Card.Text></Card.Title>
       <Card.Title className='card-title'>Author:<Card.Text className='card-text mx-2'>{viewdata.Author}</Card.Text></Card.Title>
       <Card.Title className='card-title'>Publication:<Card.Text className='card-text mx-2'>{viewdata.Publication}</Card.Text></Card.Title>
       <Card.Title className='card-title'>Year:<Card.Text className='card-text mx-2'>{viewdata.Year}</Card.Text></Card.Title>
      <Button type='submit' onClick={back}>Back</Button>
      </div>
    </Card.Body>
  </Card>
  </div>
    
    </div>
  )
}

export default ViewBookData