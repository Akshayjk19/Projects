import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { GiSecretBook } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './UserNavbar.css'
import Cartviewpage from './Cartviewpage'
import UserSideBooks from './UserSideBooks'

function UserNavbar() {
  const logout=()=>{
    localStorage.removeItem('userinfo')
  }
  return (
    <div>
    <div>
    <Navbar className='main-navbar' bg="dark" expand="lg">
     <Container fluid>
       <Navbar.Brand className='navbar-brand' href="#"> <GiSecretBook /> Books</Navbar.Brand>
       <Navbar.Toggle aria-controls="navbarScroll" />
       <Nav>
       <Link  to="/userbooks" className='navbar-link'>Home</Link>
    <Link  to="/cartpage" className='navbar-link'> Cart  </Link> 
       
       <Link  to="/userlogin" className='navbar-link' onClick={logout}> Log Out </Link>
       </Nav>
     </Container>
   </Navbar> 
    </div>
    </div>
  )
}

export default UserNavbar