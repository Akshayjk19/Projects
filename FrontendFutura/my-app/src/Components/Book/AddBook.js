import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './AddBook.css'
import SideNavbar from '../SideNavbar'
import { useNavigate } from 'react-router-dom'

function AddBook() {
    const [BookName, setBookName] = useState('')
    const [Author, setAuthor] = useState('')
    const [Publication, setPublication] = useState('')
    const [Year, setYear] = useState('')
    const [Avalibility, setAvalibility] = useState('')
    const [Price, setPrice] = useState('')

    const navigation=useNavigate()

    
    const Addbook=()=>{
        axios.post('http://localhost:5000/book',{BookName,Author,Publication,Year,Avalibility,Price}).then((book)=>{

       console.log(book.data);
       })
       
       navigation('/Books')
    }
  return (
    <div className='sidebar-with-addbook'>
    <SideNavbar/>
    <div className='book-form'>
    <form className='form-element text-center'>
    
    <input className='inpts' type="text" placeholder='Book Name' value={BookName} onChange={(e)=>setBookName(e.target.value)}/>
    <input className='inpts' type="text" placeholder='Author Name' value={Author} onChange={(e)=>setAuthor(e.target.value)}/>
    <input className='inpts' type="text" placeholder='Publication' value={Publication} onChange={(e)=>setPublication(e.target.value)}/>
    <input className='inpts' type="text" placeholder='Year' value={Year} onChange={(e)=>setYear(e.target.value)}/>
    <input className='inpts' type="text" placeholder='Avalibility' value={Avalibility} onChange={(e)=>setAvalibility(e.target.value)}/>
    <input className='inpts' type="number" placeholder='Price' value={Price} onChange={(e)=>setPrice(e.target.value)}/>
    
    <button className='btn mb-2' type='submit' onClick={Addbook}>Add</button>
    </form>
    </div>
   
    </div>
  )
}

export default AddBook