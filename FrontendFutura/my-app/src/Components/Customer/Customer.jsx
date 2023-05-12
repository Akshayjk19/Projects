import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SideNavbar from '../SideNavbar'
import { Button, Modal, Table } from 'react-bootstrap'
import { ImEye } from 'react-icons/im'
import { RiFileEditLine } from 'react-icons/ri'
import { TbTrashXFilled } from 'react-icons/tb'
import { useNavigate, useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

function Customer() {
    const [customerdata, setcustomerdata] = useState([])
    const [bookid, setbookid] = useState()
   const [show,setshow]=useState(false)

    const {_id}=useParams()


    const [PageNumber, setPageNumber] = useState(0)
    const perdata=5;
    const lastindex=PageNumber*perdata;
    const countpage=Math.ceil(customerdata.length/perdata)

    const customernavigate=useNavigate()
    

useEffect(() => {
  axios.get('http://localhost:5000/customerview').then((res)=>{
    setcustomerdata(res.data)
  })
}, [])
console.log(customerdata);

const customerview=(_id)=>{
    customernavigate(`/customereachview/${_id}`)
}

const handledelete=(_id)=>{
    setbookid(_id)
    setshow(true)
  }
const customerdelete=()=>{
axios.delete(`http://localhost:5000/customerdelete/${bookid}`).then((del)=>{
    setcustomerdata(customerdata.filter(buk=>buk._id !== bookid))
    
  })
  setshow(false);
}
const customeredit=(_id)=>{
  customernavigate(`/customeredit/${_id}`)

}
const paginationchange=({selected})=>{
setPageNumber(selected)
}


  
  return (
    <div className='d-flex'>
    <SideNavbar/>
    <div className='booktable'>
    <Table striped bordered hover>
    <thead>
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Pincode</th>
    <th>Country</th>
    <th>Button</th>
    </tr>
    </thead>
    <tbody>
    {customerdata.slice(lastindex,lastindex+perdata).map((customer,index)=>(
    <tr key={index}>
    <td>{customer.Name}</td>
    <td>{customer.Email}</td>
    <td>{customer.AddressLine}</td>
    <td>{customer.City}</td>
    <td>{customer.State}</td>
    <td>{customer.PinCode}</td>
    <td>{customer.Country}</td>
    <td> 
    <ImEye size='30'  style={{margin:'11px',cursor:'pointer',color:'blue'}} onClick={()=>{customerview(customer._id)}}/>
    <RiFileEditLine size='30' style={{margin:'11px',cursor:'pointer',color:'yellow'}} onClick={()=>{customeredit(customer._id)}}/>
     <TbTrashXFilled size='30' style={{margin:'11px',cursor:'pointer',color:'red'}} onClick={()=>{handledelete(customer._id)}}/>
     </td>
    </tr>
    
    ))}
    </tbody>
    </Table>
    <ReactPaginate 
  previousLabel={"Previous"} 
  nextLabel={"Next"}
  pageCount={countpage}
  onPageChange={paginationchange}
containerClassName={"paginationBttns"}
previousLinkClassName={"previousBttn"}
nextLinkClassName={"nextBttn"}
activeClassName={"paginationActive"}
disabledClassName={"paginationDisabled "}

  />

  <Modal show={show} onHide={()=>setshow(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Delete</Modal.Title>
  </Modal.Header>
  <Modal.Body>Are You Want to delete !</Modal.Body>
 
    <Button variant="secondary" onClick={()=>setshow(false)}>
      No
    </Button>
    <Button variant="primary" onClick={customerdelete}> Yes
    </Button>
  
</Modal>
    </div>
    </div>
  )
}

export default Customer