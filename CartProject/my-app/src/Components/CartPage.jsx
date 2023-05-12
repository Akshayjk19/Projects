import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap';
import Layout from './Layout';
import './CartPage.css'
import { useCart } from '../Context/CartProvider';

function CartPage() {
    const [products, setproducts] = useState([])
    const [data, setdata] = useState([])
    const [cart, setcart] = useCart()
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res)=>{
      console.log(res.data.products);
      setproducts(res.data.products)
    })
  }, [])


  const addtocart=(data)=>{
    const existingItem = cart.find(item => item.id === data.id);
    // const data=localStorage.getItem('userdata')
    // const cart=[...products,]

    if(existingItem)
    {
      alert('Already exist')
    }else{
      const updatecart=[...cart,{...data,quantity:1}]
      localStorage.setItem('carts',JSON.stringify(updatecart))
      setcart(updatecart)
      alert('Item added')
      console.log(cart);
      
    }
  }
  return (
    <Layout>
    <div>
    <div className='cart-card-div mt-3'>
    {products.map((items)=>(
    <Card  style={{ width: '20rem' }}>
    <Carousel>
    {items.images.map((img)=>(
     
      <Carousel.Item>
        <img
          className="map-carousel-image d-block w-100"
          src={img}
          alt="First slide"
        />
        
      </Carousel.Item>
     
    ))}
    </Carousel>
    <Card.Body>
      <Card.Title className='card-items-title'>{items.title}</Card.Title>
      <Card.Text className='card-items-description'>
        {items.description}
      </Card.Text>
      <Button variant="primary" onClick={()=>addtocart(items)}>Add to cart</Button>
    </Card.Body>
  </Card>
  ))}
  </div>
    </div>
    </Layout>
  )
}

export default CartPage