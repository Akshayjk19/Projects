import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import axios from 'axios'
import Layout from './Layout'
import './Main.css'

function Main() {
  
  
  return (
    <Layout>
    <div>
    <div className='mb-2'>
    <Card className='main-card' >
     <div className='card-box'>
      <Card.Body className='main-card-body'>
        
        <Card.Text>
          If You Want To Buy Something?
        </Card.Text>
        <Button className='card-button' variant="primary">Go To Shopping</Button>
      </Card.Body>
      </div>
    </Card>
    </div>
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="https://img.freepik.com/premium-vector/mega-sale-banner-with-red-ribbon-illustration_275806-126.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="https://img.freepik.com/premium-psd/horizontal-website-banne_451189-110.jpg"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="https://img.freepik.com/free-vector/big-diwali-sale-promotional-banner-design_1017-15833.jpg?1"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
   
    </div>
    </Layout>
  )
}

export default Main