import React from 'react'
import './Lounge.css'
import lounge from '../../Assets/lounge.jpg'

function Lounge() {
  return (
    <div className='lounge'>
     
    <div className='lounge-section'>
     
    <div className='lounge-img-div'>
     <img src={lounge} className='lounge-img' />
     </div>
    
     <div className='lounge-text-div'>
     <h2>Unaccompanied Minor Lounge</h2>


     <div className='grids'>

     <div className='single-grid'>
     <span className='grid-title'>
     Help through the airpot
     </span>
     <p>
     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
     </p>
     </div>

     <div className='single-grid'>
     <span className='grid-title'>
     Priority Boarding
     </span>
     <p>
     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
     </p>
     </div>
     

     <div className='single-grid'>
     <span className='grid-title'>
    Care on the flight
     </span>
     <p>
     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
     </p>
     </div>
     <div className='single-grid'>
     <span className='grid-title'>
     Chauffeur Drive Service
     </span>
     <p>
     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
     </p>
     </div>
     
     </div>

     </div>
     
    
     
     </div>

    </div>
  )
}

export default Lounge