import React from 'react'
import './Footer.css'
import logo from '../../Assets/flight-logo.png'
import { FaFacebookMessenger, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
function Footer() {
  return (
    <div className='footer'>

    <div className='footer-container'>
    
    <div className='grid-one'>
    <div className='footer-logo-div'>
    <img src={logo} className='logo' />
    </div>
    <p>Your mind should be stronger than your feelings, fly!</p>
    <div className='socialicon'>
    <FaFacebookMessenger className='icon'/>
    <FaTwitter className='icon'/>
    <AiFillInstagram className='icon'/>
    <FaYoutube className='icon'/>
    </div>
    </div>

    <div className='footer-links'>
    <span className='link-titles'>Information</span>
    <li>
    <a href=''>Home</a>
    </li>
    <li>
    <a href=''>Explore</a>
    </li>
    <li>
    <a href=''>Flight Status</a>
    </li>
    <li>
    <a href=''>Travel</a>
    </li>
    <li>
    <a href=''>Check In</a>
    </li>
    <li>
    <a href=''>Manage your booking</a>
    </li>
    </div>

    <div className='footer-links'>
    <span className='link-titles'>Quick Guide</span>
    <li>
    <a href=''>FAQ</a>
    </li>
    <li>
    <a href=''>How to</a>
    </li>
    <li>
    <a href=''>Features</a>
    </li>
    <li>
    <a href=''>Baggage</a>
    </li>
    <li>
    <a href=''>Route Map</a>
    </li>
    <li>
    <a href=''>Our Communities</a>
    </li>
    </div>

    <div className='footer-links'>
    <span className='link-titles'>Information</span>
    <li>
    <a href=''>Chauffuer</a>
    </li>
    <li>
    <a href=''>Our partners</a>
    </li>
    <li>
    <a href=''>Destination</a>
    </li>
    <li>
    <a href=''>Careers</a>
    </li>
    <li>
    <a href=''>Transportation</a>
    </li>
    <li>
    <a href=''>Programme Rules</a>
    </li>
    </div>

    </div>

    </div>
  )
}

export default Footer