import React, { useState } from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'
import './Registration.css'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Number, setNumber] = useState('')
    const [Address, setAddress] = useState('')
    const [State, setState] = useState('')
    const [Pin, setPin] = useState('')

    const navigate=useNavigate()

    const signup=(e)=>{
        e.preventDefault()
        const data={Name,Email,Number,Address,State,Pin}
        localStorage.setItem('userdata',JSON.stringify(data))
        navigate('/main')
    }
  return (
    <div>
    <Navbar className="navbar"  bg='dark' expand="lg">
    <Container fluid>
      <Navbar.Brand className="navbar-brand" style={{color:'white'}} href="#"> <FaShoppingCart size={28} style={{color:'yellow'}} /> CARTY</Navbar.Brand>
      </Container>
      </Navbar>

    <div className='reg-main'>
    <Form className='reg-form'>
    <h1 className='reg-head'>Registration Form</h1>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control value={Name} onChange={(e)=>setName(e.target.value)} className="reg-input" type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control value={Email} onChange={(e)=>setEmail(e.target.value)} className="reg-input" type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" >
    <Form.Label>Contact Number</Form.Label>
    <Form.Control value={Number} onChange={(e)=>setNumber(e.target.value)} className="reg-input"  type="Number" placeholder="Enter Number" />
  </Form.Group>

  <Form.Group className="mb-3" >
  <Form.Label>Address</Form.Label>
  <Form.Control value={Address} onChange={(e)=>setAddress(e.target.value)} className="reg-input" type="text" placeholder="Enter Address" />
</Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>State</Form.Label>
        <Form.Control value={State} onChange={(e)=>setState(e.target.value)} className="reg-input" type="text" placeholder="State" />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label>Pin Number</Form.Label>
      <Form.Control value={Pin} onChange={(e)=>setPin(e.target.value)} className="reg-input" type="number" placeholder="Enter Pin Number" />
    </Form.Group>

    <div className='reg-button'>
      <Button className='button' variant="primary" type="submit" onClick={signup}>
        Sign UP
      </Button>
      </div>
    </Form>
    </div>
    </div>
  )
}

export default Registration