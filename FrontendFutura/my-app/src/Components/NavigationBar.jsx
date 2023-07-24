import React from 'react'
import { Button, Container, Nav, NavLink, Navbar} from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
// import './NavigationBar.css'
import './Navbar.css'
import SideNavbar from './SideNavbar'
import { GiSecretBook } from 'react-icons/gi'

function NavigationBar() {
  
  return (
    <div className='main'>
    <Navbar className='main-navbar' bg="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand className='navbar-brand' href="#"> <GiSecretBook /> Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Nav>
      <Nav.Link className='navbar-link' href="/userlogin">Login</Nav.Link>
      <Nav.Link className='navbar-link' href="/userregistration">Register</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavigationBar