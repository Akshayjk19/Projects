import React, { useEffect, useState } from 'react'
import { useCart } from '../Context/CartProvider'
import Layout from './Layout'
// import './MyCart.css'
import './Mycart2.css'

function MyCart() {
const [cart, setcart]=useCart()

console.log(cart);
const increment = (id) => {
  const updatedCart = cart.map(item => {
    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity + 1,
        price:item.price / item.quantity * (item.quantity + 1),
      };
    }
    return item;
  });
  setcart(updatedCart);
};

const decrement = (id) => {
  const updatedCart = cart.map(item => {
    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
        price:item.price / item.quantity * (item.quantity - 1),
      };
    }
    return item;
  });
  setcart(updatedCart);
};


  const handleRemove = (id) =>{
    const arr = cart.filter((item)=>item.id !== id);
    setcart(arr);
  
    // handlePrice();
}

  return (
    <Layout>
    <div className='mycart'>
    <table className='mycart-table'>
    <thead>
    <tr>
    <th>Images</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Remove</th>
    </tr>
    </thead>
    <tbody>
    {cart.map((items)=>(
    <tr key={items.id}>
    <td><img className='mycart-image' src={items.thumbnail}/></td>
    <td>{items.title}</td>
    <td>{items.price}</td>
    <td><button onClick={()=>decrement(items.id)} >-</button>{items.quantity}<button onClick={()=>increment(items.id)} >+</button></td>
    <td><button onClick={()=>handleRemove(items.id)}>Remove</button></td>
    </tr>
    ))}
    </tbody>
    </table>
    </div>
    </Layout>
  )
}

export default MyCart