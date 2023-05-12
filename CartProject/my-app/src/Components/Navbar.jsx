import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import './Navbar.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setclick] = useState(false)

    const handleclick=()=>{
        setclick(!click)
    }

  return (
    <div>
    <nav className='nav-bar'>
   
    <div className='nav-navbrand' href="#"><FaShoppingCart size={28} style={{color:'yellow'}} /> CARTY</div>
    
    <div className={`nav-navlinks ${click && "switch"}`}>
    <Link className='nav-link'  href='#'>Home</Link>
    <Link className='nav-link' href='#'>Catrgories</Link>
    <Link className='nav-link' href='#'>Cart</Link>
    <button className={`mobile-icon ${click && "switch"}`} onClick={handleclick}>
   {click?
    <AiFillCloseCircle style={{color:'white'}} /> : <RxHamburgerMenu  style={{color:'white'}} /> 
    
}
</button>
    </div>
    </nav>
    </div>
  )
}

export default Navbar