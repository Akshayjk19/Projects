import React, { useState } from "react";
import "./NavBar.css";
import { MdSupportAgent } from "react-icons/md";
import { FaLanguage } from 'react-icons/fa'
import { HiOutlineBars4 } from 'react-icons/hi2'
import { SiConsul } from 'react-icons/si'
import logo from '../../Assets/flight-logo.png'

function NavBar() {

     const [active, setactive] = useState('navbarmenu')


     const shownavbar = () =>{
 setactive('navbarmenu shownavbar')
     }

     const removenavbar = () =>{
         setactive('navbarmenu')
            }
            
  return (
    <div className="navbar">
      <div className="navbarOne">
        <div>
        <SiConsul className="icon"/>
        </div>
        <div className="navbarone-links">
        <li className="linkOne-list"><MdSupportAgent className="icon"/>Support</li>
        <li className="linkOne-list"><FaLanguage className="icon"/>Languages</li>
        </div>
        <div className="sign-btn">
        <span>Sign In</span>
        <span>Sign Out</span>
        </div>
      </div>

      <div className='navbarTwo'>

      <div className="logo-div">
      <img src={logo} className="logo" />
      </div>

      <div className={active}>
      <ul className="menu">
      <li onClick={removenavbar}  className="list-items">Home</li>
      <li onClick={removenavbar}  className="list-items">About</li>
      <li onClick={removenavbar}  className="list-items">Offers</li>
      <li onClick={removenavbar}  className="list-items">Seats</li>
      <li onClick={removenavbar}  className="list-items">Destinations</li>
      </ul>
      <button onClick={removenavbar} className="btnOne">Contact</button>
      </div>
      
      <button className="btnTwo">Contact</button>

      <div onClick={shownavbar} className="toggle-icon">
      <HiOutlineBars4 className="icon"/>
      </div>

      </div>
    </div>
  );
}

export default NavBar;
