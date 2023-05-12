import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiCartAdd } from "react-icons/bi";
import SideNavbar from '../SideNavbar'
import { useNavigate, useParams } from 'react-router-dom';
import { ImEye } from 'react-icons/im';
import { RiFileEditLine } from 'react-icons/ri';
import { TbTrashXFilled } from 'react-icons/tb';
import { Button, Modal } from 'react-bootstrap';

function Order() {
    const [order, setorder] = useState([])
    const [show, setshow] = useState(false)
    const [Idoforder, setIdoforder] = useState()
    const {_id}=useParams()
    const navig=useNavigate()

    useEffect(() => {
      axios.get('http://localhost:5000/Orderview').then((res)=>{
        setorder(res.data)
      })
    }, [])
    console.log(order);

    const orderview=(_id)=>{
      navig(`/ordereachview/${_id}`)
    }

    const orderedit=(_id)=>{
      navig(`/orderedit/${_id}`)
    }

    const orderdelete=(_id)=>{
      setIdoforder(_id)
      setshow(true)
    }
console.log(Idoforder);
    const confirmorderdelete=()=>{
      axios.delete(`http://localhost:5000/Orderdelete/${Idoforder}`).then((res)=>{
        setorder(order.filter(odr=>odr._id !== Idoforder))
      })
      setshow(false)
    }

    
  return (
    <div className='d-flex'>
    <SideNavbar/>
    <div>
    <table>
    <thead>
    <tr>
    <th>First Name:</th>
    <th>Last Name:</th>
    <th>Order Id:</th>
    <th>Product Number:</th>
    <th>Date:</th>
    <th>Changes</th>
    
    </tr>
    </thead>
    <tbody>
    {order.map((data)=>(
    <tr key={data._id}>
    <td>{data.FirstName}</td>
    <td>{data.LastName}</td>
    <td>{data.OrderId}</td>
    <td>{data.ProductNumber}</td>
    <td>{data.Date}</td>
    <td>
    <ImEye size='25'  className='btn-icon' onClick={()=>{orderview(data._id)}}/>
    <RiFileEditLine size='25'  className='btn-icon' onClick={()=>{orderedit(data._id)}}/>
     <TbTrashXFilled size='25' className='btn-icon' onClick={()=>{orderdelete(data._id)}}/> 
    </td>
    </tr>
    ))}
    </tbody>
    </table>
    <Modal show={show} onHide={()=>setshow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Confirm Delete</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are You Want to delete !</Modal.Body>
   
      <Button variant="secondary" onClick={()=>setshow(false)}>
        No
      </Button>
      <Button variant="primary" onClick={confirmorderdelete}> Yes
      </Button>
    
  </Modal>
    </div>
    </div>
  )
}

export default Order