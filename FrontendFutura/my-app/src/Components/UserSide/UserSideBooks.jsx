import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Modal, Nav, Navbar } from 'react-bootstrap'
import './UserSideBook.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import UserNavbar from './UserNavbar'
import Layout from '../Layout'
import Userlayout from './Userlayout'

import { GiSecretBook } from 'react-icons/gi'
import { useCart } from '../../Context/CartProvider'

function UserSideBooks() {
    const [bookinfo, setbookinfo] = useState([])
    const [productid, setproductid] = useState('')

    // const [cart, setcart] = useCart()
    // const [show, setshow] = useState(false)
    // const [cart, setcart] = useState([])
    
    const {_id}=useParams()
  //  const navig=useNavigate()


    useEffect(() => {
      axios.get('http://localhost:5000/displaybook').then((res)=>{
        setbookinfo(res.data)
      })
    }, [])


    const handlecart=(productid)=>{
      const prdctid=productid
      const userid=localStorage.getItem('userid')
      // console.log(userid);
      // console.log({productid:prdctid,userid:userid});

      const data={productid:prdctid,userid:userid}
      console.log(data.productid);
      
      axios.post('http://localhost:5000/addtocart',data).then((res)=>
      (console.log(res.data),alert(res.data.message)))
    
    }
    
    
// const logout=()=>{
//   localStorage.removeItem('userinfo')
// }
  return (
       <Userlayout>
   <div style={{backgroundColor:'black',height:'100vh'}}>
   
    <div className='user-main-div'>
    {bookinfo.map((data)=>(
    <Card key={data._id} className='user-card' >
      <Card.Body className='d-block'>
        <Card.Title>Book Name:-{data.BookName}</Card.Title>
        <Card.Text>
          Author:-{data.Author}<br/>
          Publication:-{data.Publication}<br/>
          Year:-{data.Year}<br/>
          Price:-{data.Price}<br/>
        </Card.Text>
        
        <Button className='user-card-button' onClick={()=>handlecart(data._id)}>Add to cart</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
    </div>
    </Userlayout>


  )
}

export default UserSideBooks

//  cart function
// ---------------
// {()=>{  
//   if(cart.find((book)=>book._id === data._id)){
//   alert('Already in cart')
// }else{
//   setcart([...cart,data])
//   alert('Item added')
//   localStorage.setItem('cart',JSON.stringify([...cart,data]))
// }
// }}