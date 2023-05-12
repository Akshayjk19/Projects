import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import '../Edit.css'
import SideNavbar from '../SideNavbar'

function UpdateBook() {
  const [data,setdata] = useState([])
  const {_id}=useParams() 
  // const [data, setdata] = useState([])
const navi=useNavigate()
console.log(_id);
useEffect(() => {
  axios.get(`http://localhost:5000/eachbook/${_id}`).then((bookdata)=>{
    setdata(bookdata.data)
    console.log(bookdata.data);
  })
}, [])// each data getting using 'id'

console.log(data);
const [BookName, setBookName] = useState(data.BookName)
const [Author, setAuthor] = useState(data.Author)
const [Publication, setPublication] = useState(data.Publication)
const [Year, setYear] = useState(data.Year)
const [Avalibility, setAvalibility] = useState(data.Avalibility)
const [Price, setPrice] = useState(data.Price)




// const updatevalue=(event)=>{
//   const {name,value}=event.target
//   setupdatebook({...updatebook,[name]:value})
// // }
  const update=()=>{
    axios.put(`http://localhost:5000/bookedit/${_id}`,{BookName,Author,Publication,Year,Avalibility,Price}).then((up)=>{
 
     console.log(up.data);
     
     navi('/Books')
    })
    // navi('/Books')
   
   } // edit function
const back=()=>{
navi('/Books')
}

  return (
    <div className='d-flex'>
    <SideNavbar/>
    <div className='edit-form-div'>
    <div className='update-form'>
    <h1 className='edit-head'>Edit Book</h1>
    
    <input  type="text" className='edit-inputs' placeholder='Book Name'   Value={data.BookName} onChange={(e)=>{setBookName(e.target.value)}}/>
    <input  type="text" className='edit-inputs' placeholder='Author'   Value={data.Author} onChange={(e)=>{setAuthor(e.target.value)}}/>
    <input  type="text" className='edit-inputs' placeholder='Publication'   Value={data.Publication} onChange={(e)=>{setPublication(e.target.value)}}/>
    <input  type="text" className='edit-inputs' placeholder='Year'  Value={data.Year} onChange={(e)=>{setYear(e.target.value)}}/>
    <input  type="text" className='edit-inputs' placeholder='Avalibility'  Value={data.Avalibility} onChange={(e)=>{setAvalibility(e.target.value)}}/>
    <input  type="number" className='edit-inputs' placeholder='Price'  Value={data.Price} onChange={(e)=>{setPrice(e.target.value)}}/>
    
    <div className='button-div'>
    <Button type='submit' className='edit-button mx-2' onClick={update}>Update</Button>
    <Button type='submit' className='edit-button mx-2' onClick={back}>Back</Button>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default UpdateBook