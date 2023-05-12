import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { ImEye } from "react-icons/im";
import { RiFileEditLine } from "react-icons/ri";
import { TbTrashXFilled } from "react-icons/tb";
import SideNavbar from '../SideNavbar'
import './Book.css'
import ReactPaginate from 'react-paginate'
import UpdateBook from './UpdateBook'

function Books() {
    const [bookdata, setbookdata] = useState([])
    const [show,setshow]=useState(false)
   const [bookid, setbookid] = useState()
   const [search, setsearch] = useState()
  

    const {_id}= useParams()

    const [PageNumber, setPageNumber] = useState(0)
    const perpage=5;
    const pageclick=PageNumber*perpage;
    const countpage=Math.ceil(bookdata.length/perpage);


    const navig=useNavigate()

    
    useEffect(() => {
        axios.get('http://localhost:5000/displaybook').then(book=>{
            setbookdata(book.data)
        }).catch
            (err=>console.log(err))
    }, []) //getting data from database


    const handledelete=(_id)=>{
      setbookid(_id)
      setshow(true)
    }

    const deletebook=( )=>{
        axios.delete(`http://localhost:5000/bookdelete/${bookid}`).then((del)=>{
          setbookdata(bookdata.filter(buk=>buk._id !== bookid))
          
        })
        setshow(false);
    }//delete data from database
    
   
    const editsubmit=(_id)=>{
      navig(`/updatebook/${_id}`)  
    }
   const view=(_id)=>{
    navig(`/viewbook/${_id}`)
   }

   const changepage=({selected})=>{
    setPageNumber(selected);

   }

   const bookfilter= search ? bookdata.filter(items=> items.BookName.toLowerCase().includes(search.toLowerCase())) : bookdata;
   
  return (
    <div>
    <div className='book-page'>
    
    <SideNavbar style={{width:'100%'}}/>
   

    <div  className='book-page-main-div'>
    <div className='book-input-div'>
    <input type='text' className='search-input' placeholder='search bookname' value={search} onChange={(e)=> setsearch(e.target.value)} />
    </div>
    <div>
    <Table className='book-table mt-2'>
    <thead>
      <tr>
        <th>Book Name</th>
        <th>Author</th>
        <th>Publication</th>
        <th>Year</th>
        <th>Avalibility</th>
        <th>Price</th>
        <th>Changes</th>
      </tr>
    </thead>
    <tbody>
    {bookfilter.slice(pageclick,pageclick+perpage).map((bk,index)=>(
      
      <tr key={index}>
        <td>{bk.BookName}</td>
        <td>{bk.Author}</td>
        <td>{bk.Publication}</td>
        <td>{bk.Year}</td>
        <td>{bk.Avalibility}</td>
        <td>{bk.Price}</td>
        <td>
        <ImEye size='25'  className='btn-icon' onClick={()=>{view(bk._id)}}/>
       <RiFileEditLine size='25'  className='btn-icon' onClick={()=>{editsubmit(bk._id)}}/>
        <TbTrashXFilled size='25' className='btn-icon' onClick={()=>{handledelete(bk._id)}}/>
        </td>
      </tr>
      ))}

    </tbody>
    
  </Table>
  <ReactPaginate 
  previousLabel={"Previous"} 
  nextLabel={"Next"}
  pageCount={countpage}
  onPageChange={changepage}
containerClassName={"paginationBttns"}
previousLinkClassName={"previousBttn"}
nextLinkClassName={"nextBttn"}
activeClassName={"paginationActive"}
disabledClassName={"paginationDisabled "}

  />
  </div>


  <Modal show={show} onHide={()=>setshow(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Confirm Delete</Modal.Title>
  </Modal.Header>
  <Modal.Body>Are You Want to delete !</Modal.Body>
 <Modal.Footer>
    <Button variant="secondary" onClick={()=>setshow(false)}>
      No
    </Button>
    <Button variant="primary" onClick={deletebook}> Yes
    </Button>
    </Modal.Footer>
</Modal>
  </div>
  </div>
    </div>
  )
}

export default Books