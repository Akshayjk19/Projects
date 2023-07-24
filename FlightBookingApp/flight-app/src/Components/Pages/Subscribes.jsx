import React from 'react'
import './Subscribes.css'

function Subscribes() {
  return (
    <div className='subscribe'>
    <div className='subscribe-container'>
    <h2>Subscribe Newsletters & Get Latest News</h2>
    <div className='subscribe-input-div'>
    <input type='text' placeholder='Enter your email address' />
    <button className='sub-button'>Subscribe</button>
    </div>
    </div>
    </div>
  )
}

export default Subscribes