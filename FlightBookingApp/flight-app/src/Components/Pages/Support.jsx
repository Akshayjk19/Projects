import React from 'react'
import './Support.css'
import gridimg from '../../Assets/gridimage.jpg'

function Support() {
  return (
    <div className='support'>
    <div className='support-section'>
    <div className='title-div'>
    <div className='head-div'>
    <small>travel support</small>
    <h2>Plan your travel with confidence</h2>
    <p>Find help with booking and travel plans , see what to expect along the journey !</p>
    </div>
    <div className='info-div'>
    <div className='text-div'>

    <div className='single-info'>
    <span className='number'>01</span>
    <h4>Travel Requirements for Dubai</h4>
    <p>Find help with booking and travel plans, see what to expect along the jounrney to your favourite destinations!</p>
    </div>

    <div className='single-info'>
    <span className='number'>02</span>
    <h4>Chauffeur services at your arrival</h4>
    <p>Find help with booking and travel plans, see what to expect along the jounrney to your favourite destinations!</p>
    </div>
    
    <div className='single-info'>
    <span className='number'>03</span>
    <h4>Multi-risk travel insurane</h4>
    <p>Find help with booking and travel plans, see what to expect along the jounrney to your favourite destinations!</p>
    </div>
    
    </div>

    <div className='img-div'>
    <img src={gridimg}  className='grid-img' />
    </div>

    </div>

    </div>
    </div>
    </div>
  )
}

export default Support