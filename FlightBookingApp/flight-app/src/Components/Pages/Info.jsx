import React from 'react'
import './Info.css'
import { SlCalender } from 'react-icons/sl'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs'

function Info() {
  return (
    <div className='info'>
    <div className='info-container'>
    <div className='info-title'>
    <h2>Travel to make memories all around the world</h2>

    <button className='info-button'>View all</button>
    </div>

    <div className='card-div'>
    
    <div className='single-card'>
    <div className='info-icon-div'>
    <SlCalender className='info-icon'/>
    </div>

    <span className='card-title'>Book & Relax</span>
    <p>You can also call airlines from your phone and book a flight ticket! </p>


    </div>

    <div className='single-card'>
    <div className='info-icon-div'>
    <BsShieldCheck className='info-icon'/>
    </div>

    <span className='card-title'>Smart Checklist</span>
    <p>You can also call airlines from your phone and book a flight ticket! </p>
    

    </div>
    <div className='single-card'>
    <div className='info-icon-div'>
    <BsBookmarkCheck className='info-icon'/>
    </div>

    <span className='card-title'>Save More</span>
    <p>You can also call airlines from your phone and book a flight ticket! </p>
    

    </div>
     
    </div>


    </div>
    </div>
  )
}

export default Info