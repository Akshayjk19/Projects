import React from 'react'
import './Traveler.css'

import paris from '../../Assets/Paris.jpg'
import china from '../../Assets/China.jpg'
import spain from '../../Assets/spain.jpg'
import italy from '../../Assets/Italy.jpg'

import traveler1 from '../../Assets/traveler1.jpg'
import traveler2 from '../../Assets/traveler2.jpg'
import traveler3 from '../../Assets/traveler3.jpg'
import traveler4 from '../../Assets/traveler4.jpg'

const travelers = [
    {
        id:1,
        destination: paris,
        traveler:traveler1,
        travelername:'lerom ipsem',
        sociallink:'@lerom_ipsem'
    },
    {
        id:2,
        destination: china,
        traveler:traveler2,
        travelername:'lerom ipsem',
        sociallink:'@lerom_ipsem'
    },
    {
        id:3,
        destination: spain,
        traveler:traveler3,
        travelername:'lerom ipsem',
        sociallink:'@lerom_ipsem'
    },
    {
        id:4,
        destination: italy,
        traveler:traveler4,
        travelername:'lerom ipsem',
        sociallink:'@lerom_ipsem'
    }
]

function Traveler() {
   
  return (
    
    <div  className='traveler'>
    <div className='traveler-container'>
    <h2>Top traveler of this month</h2>

     <div className='traveler-container-grid'>
     {travelers.map(({id, destination, traveler, travelername,sociallink})=>{
        return(
     <div key={id} className='single-traveler'>
     <img src={destination} className='destination-img'/>
     
     <div className='traveler-details'>

     <div className='traveler-pic'>
     <img src={traveler} className='traveler-img-one'/>
     </div>
     <div className='traveler-name'>
     <span>{travelername}</span>
     <p>{sociallink}</p>
     </div>
     </div>
     </div>
     )})}
     
     </div>
     
    
    </div>
    </div>

  )
}


export default Traveler