import React, { useState } from 'react'
import {  NavLink } from 'react-bootstrap'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoIosPersonAdd, IoMdAddCircle } from "react-icons/io";
import { GiBookshelf } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { VscPackage } from "react-icons/vsc";
import { BsFillPersonLinesFill, BsPersonFill, BsPersonPlusFill } from "react-icons/bs";

import './SideNavbar.css'
import { RiTeamFill } from 'react-icons/ri';
import { BiCartAdd } from 'react-icons/bi';



function SideNavbar() {
  const [show, setshow] = useState(false)
  const iconsize=20
  return (
    <div>
    <div id='nav' >
    
    <div className='links'>
   
    <NavLink className='nav-links' href='/Books'><GiBookshelf size={iconsize} />Book</NavLink>
    
    
    <NavLink className='nav-links' href='/AddBook'><IoMdAddCircle size={iconsize} /> Add Book</NavLink>

    <NavLink className='nav-links' href='/Client'><BsFillPersonLinesFill size={iconsize} /> Client</NavLink>

    <NavLink className='nav-links' href='/AddClient'><IoIosPersonAdd size={iconsize} /> Add Client</NavLink>

    <NavLink className='nav-links' href='/customer'><BsPersonFill size={iconsize} />Customer</NavLink>

    <NavLink className='nav-links' href='/addcustomer'><BsPersonPlusFill size={iconsize} />Add Customer</NavLink>

    <NavLink className='nav-links' href='/teammembers'><RiTeamFill size={iconsize} />Team Members</NavLink>

    <NavLink className='nav-links' href='/addteammembers'><IoIosPersonAdd size={iconsize} />Add Team Members</NavLink>

    <NavLink className='nav-links' href='/order'><VscPackage size={iconsize} />Order</NavLink>

    <NavLink className='nav-links' href='/addorder'><BiCartAdd  size={iconsize} />Add Order</NavLink>
    
    </div>
    <div>
    <NavLink className='nav-links' href='/Login'><GoSignOut size={iconsize}/> Log Out</NavLink>
    </div>
    </div>
    </div>
  )
}

export default SideNavbar