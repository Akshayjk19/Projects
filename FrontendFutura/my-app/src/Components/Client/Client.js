import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideNavbar from '../SideNavbar'
import { Button, Modal, Table } from 'react-bootstrap'
import { ImEye } from 'react-icons/im'
import { RiFileEditLine } from 'react-icons/ri'
import { TbTrashXFilled } from 'react-icons/tb'
import { BsLamp } from 'react-icons/bs'
import ReactPaginate from 'react-paginate'
import './Client.css'

function Client(){
    const [Client, setClient] = useState([])
    const [clientid, setclientid] = useState('')
    const [show, setshow] = useState(false)
   
    const {_id}= useParams()
    const navig=useNavigate()

    const [Pagenumber, setPagenumber] = useState(0)
    const perdata=5;
    const lastpage=Pagenumber*perdata;
    const pagecount=Math.ceil(Client.length/perdata)

    
    useEffect(() => {
        axios.get('http://localhost:5000/clientview').then(book=>{
            setClient(book.data)
            
        }).catch
            (err=>console.log(err))
    }, []) //getting data from database


    const deleteclient=(_id)=>{
      setclientid(_id)
      setshow(true)
    }

    const Delete=( )=>{
        axios.delete(`http://localhost:5000/clientdelete/${clientid}`).then((del)=>{
          setClient(Client.filter(clit=>clit._id !== clientid))
        })
        setshow(false)
    }//delete data from database
   
    const clientedit=(_id)=>{
      navig(`/updateclient/${_id}`)  
      // console.log(`Id:${_id}`);
    }
   const view=(_id)=>{
    navig(`/viewecachclient/${_id}`)
    // console.log(`Id:${_id}`);
   }

   const changepage=({selected})=>{
    setPagenumber(selected)
   }

  return (
    <div>
    <div className='client-navbar'>
    <SideNavbar />
    <div  className='client-table-div'>
    <Table className='client-table'>
    <thead>
      <tr>
      
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>SignedStatus</th>
        <th>Role</th>
        <th>Phone Number</th>
        <th>Changes</th>
      </tr>
    </thead>
    <tbody>
    {Client.slice(lastpage,lastpage+perdata).map((clint,index)=>(
      
      <tr key={clint._id}>
        <td>{clint.Name}</td>
        <td>{clint.UserName}</td>
        <td>{clint.Email}</td>
        <td>{clint.SignedStatus ? "Signed" : "Not Signed"}</td>
        <td>{clint.Role}</td>
        <td>{clint.PhoneNumber}</td>
        <td>
        <ImEye size='25'  className='client-icon' onClick={()=>{view(clint._id)}}/>
       <RiFileEditLine size='25' className='client-icon' onClick={()=>{clientedit(clint._id)}}/>
        <TbTrashXFilled size='25' className='client-icon' onClick={()=>{deleteclient(clint._id)}}/>
        </td>
      </tr>
      ))}
    </tbody>
    
  </Table>
  <ReactPaginate previousLabel='Previous' nextLabel='Next' pageCount={pagecount} onPageChange={changepage} containerClassName='paginationstyle' />
  <Modal show={show} onHide={()=>setshow(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Delete</Modal.Title>
  </Modal.Header>
  <Modal.Body>Are You Want to delete !</Modal.Body>
 
    <Button variant="secondary" onClick={()=>setshow(false)}>
      No
    </Button>
    <Button variant="primary" onClick={Delete}> Yes
    </Button>
  
</Modal>
  </div>
  
    </div>
    </div>
  )
}

export default Client