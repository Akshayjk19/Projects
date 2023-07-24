import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CartViewPart.css'
import Userlayout from './Userlayout'
import { Card } from 'react-bootstrap'

function Cartviewpage() {
    const [cart, setcart] = useState([])
    // const [count, setcount] = useState( )
    // const [price, setprice] = useState( )
    
    const [productid, setproductid] = useState()

    useEffect(() => {
        const data={ userid: localStorage.getItem('userid')} 
        console.log(data.userid);
      axios.post('http://localhost:5000/getcart',data)
      .then((res)=>{
        console.log(res.data.data.cart);
        const initializedCart = res.data.data.cart.map((item) => ({
          ...item,
          Quantity: 1,
        }))
        setcart(initializedCart)
      })
    }, [])
    // console.log(cart);
    const handledelete=async(productid)=>{
      const prdctid=productid
      const userid=localStorage.getItem('userid')
    

      const data={productid:prdctid,userid:userid}
      axios.put('http://localhost:5000/deletecart',data)
      .then((res)=>(setcart(cart.filter(dt=>dt._id !== productid))
      // console.log(res.data)
      ))
      
    }

    const increment = (productid) => {
      const updatedCart = cart.map((item) => {
        if (item._id === productid) {
          return {
            ...item,
            Quantity: item.Quantity + 1,
            Price: item.Price / item.Quantity * (item.Quantity + 1), // update the price based on the new quantity
          };
        }
        return item;
      });
      setcart(updatedCart);
    };
    
    const decrement = (productid) => {
      const updatedCart = cart.map((item) => {
        if (item._id === productid && item.Quantity > 1) {
          return {
            ...item,
            Quantity: item.Quantity - 1,
            Price: item.Price / item.Quantity * (item.Quantity - 1), // update the price based on the new quantity
          };
        }
        return item;
      });
      setcart(updatedCart);
    };
    // calculate total price of items in the cart
    const totalPrice = cart.reduce((acc, item) => {
      return acc + item.Price;
    }, 0);
  

//     const decrement=(productid)=>{
//       // const updatedCart = cart.map((item) => {
//       //   if (item._id === productid) {
//       //     item.Quantity -= 1;
//       //    const price=item.price
//       //     price /= item.Quantity;
       
//       //   }
//       //   return item;
//       // });
//       // setcart(updatedCart);
//     }
// console.log(cart);
//     const increment=(productid)=>{
    
//       const updatedCart = cart.map((item) => {
//         if (item._id === productid) {
//           item.Quantity += 1;
//           const price=item.Price * item.Quantity 
//                  item.Price=price
//         }
//         return item;
//       });
//       setcart(updatedCart);
//     }
    // console.log();
    
  return (
    <Userlayout>
    <div className='cart-main-div'>
    
    <h2 className='cart-header'>Items:-</h2>
    
   
    <div  className='cart-card-main'>
    {cart.map((details)=>(
      
            <div key={details._id} className='cart-card' >
            <div className='cart-data'>
           <span className='cart-content'>{details.BookName}</span>
            <div><h4 className='cart-text-head'>Price:<span className='cart-text-price'>{details.Price}</span></h4></div> 
            </div>
            <div className='cart-btn-inc-dec'>
            <button className='cart-inc-dec-btn' onClick={()=>decrement(details._id)} >-</button>
            <span className='cart-count-text'>{details.Quantity}</span>
            <button className='cart-inc-dec-btn' onClick={()=>increment(details._id)} >+</button>
            </div>
            <div className='cart-button-div'>
           
            <button className='cart-button' onClick={()=>handledelete(details._id)}>Remove</button>
            </div>
        </div>
        
            ))} 
            </div>
            <div className='cart-payment'>
            <Card style={{ width: '14rem',height:'14rem' }}>
      <Card.Body>
        <Card.Title className='cart-payment-header'>Payment</Card.Title>
       
        <Card.Text className='cart-text-Para'>Total price of your Cart</Card.Text>
        <Card.Text className='cart-text-total'>Rs- {totalPrice}</Card.Text>
      
      </Card.Body>
        </Card>
            </div>
            
    </div>
    </Userlayout>
  )
}

export default Cartviewpage