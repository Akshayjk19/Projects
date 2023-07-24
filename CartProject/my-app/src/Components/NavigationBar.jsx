import React, { useState } from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiFillCloseCircle } from 'react-icons/ai'
import './NavigationBar.css'
import { useCart } from '../Context/CartProvider'
import { Link } from 'react-router-dom'

function NavigationBar() {
  const [click, setclick] = useState(false)
  const [cart,setcart] =useCart()

  const handleclick=()=>{
    setclick(!click)
  }
  return (
    <div>
    <Navbar className="navbar"  expand="lg">
    <Container fluid>
    
      <Navbar.Brand className="navbar-brand" href="#"> <FaShoppingCart size={28} style={{color:'yellow'}} /> CARTY</Navbar.Brand>
      
      
        <Nav
          className="navbar-nav justify-content-end"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link className="navbar-links" to="/main">Home</Link>
          <Link className="navbar-links" to="/cart">Shopping Cart</Link>
          <NavDropdown className="navbar-links" title="Catrgories" id="navbarScrollingDropdown">
            <NavDropdown.Item className="navbar-dropdown-links"  href="#action3">SmartPhone</NavDropdown.Item>
            <NavDropdown.Item className="navbar-dropdown-links" href="#action4">
              Laptops
            </NavDropdown.Item>
            <NavDropdown.Item className="navbar-dropdown-links" href="#action5">
              Fragrence
            </NavDropdown.Item>
            <NavDropdown.Item className="navbar-dropdown-links"  href="#action3">Skin Care</NavDropdown.Item>
            <NavDropdown.Item className="navbar-dropdown-links"  href="#action3">Groceries</NavDropdown.Item>
            <NavDropdown.Item className="navbar-dropdown-links"  href="#action3">Home Decoration</NavDropdown.Item>
          </NavDropdown>
          
          <Link className="navbar-links" to="/mycart"><FaShoppingCart size={20} style={{color:'black'}} />{cart.length}</Link>
        </Nav>
        
      
        <div className={`navbar-nav ${click ? 'show' : ''}`} onClick={handleclick}>
      {click ? (<RxHamburgerMenu className='mobile-icon' />) :
       (<AiFillCloseCircle className='mobile-icon' />)}
        </div>
    </Container>

  </Navbar>
    </div>
  )
}

export default NavigationBar