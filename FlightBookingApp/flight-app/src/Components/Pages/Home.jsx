import React from 'react'
import './Home.css'
import image from '../../Assets/Plane-take-off.png'
import video from '../../Assets/Sky.mp4'

function Home() {
  return (
    <div className='home'>

    <div className='home-text'>
    <h1>Flying High, Feeling Free</h1>
    </div> 
    
    <div className='home-image'>

    <div className='home-video-div'>
    <video src={video} autoPlay muted loop className='video'></video>
    </div>
    
   
    </div>
    
    </div>
  )
}

export default Home