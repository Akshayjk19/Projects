import React from 'react'
import NavigationBar from './NavigationBar'
import UserReg from './UserSide/UserReg'
import Login from './Login'
import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap'
import './MainPage.css'
import { GiSecretBook } from 'react-icons/gi'

function MainPage() {
  return (
    <div>
    <Navbar className='main-navbar' bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className='navbar-brand' href="#"> <GiSecretBook /> Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          
            <Button className='nav-button mx-2' href='/userregistration' >User</Button>
            <Button className='nav-button mx-2' href='/Login' >Admin</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='main-content'></div>
    <div className='quotes'>
    <p className='p-quotes'>“Fairy tales are more than true: not because they tell us that dragons exist,<br/> but because they tell us that dragons can be beaten.”
    <br/>― Neil Gaiman, Coraline</p>
    </div>
    
    </div>
 
  )
}

export default MainPage