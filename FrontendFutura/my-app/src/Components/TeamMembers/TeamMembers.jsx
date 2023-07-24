import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import SideNavbar from '../SideNavbar'
import './TeamMembers.css'
import { ImEye } from 'react-icons/im'
import { RiFileEditLine } from 'react-icons/ri'
import { TbTrashXFilled } from 'react-icons/tb'
import { useNavigate, useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

function TeamMembers() {
    const [TeamMember, setTeammember] = useState([])
    const [Teammemberid, setTeammemberid] = useState('')
    const [show, setshow] = useState(false)
    const {_id}=useParams()

    const [PageNumber, setPageNumber] = useState(0)
    const perdata=5;
    const lastindex=PageNumber*perdata;
    const countpage=Math.ceil(TeamMember.length/perdata)

    const navig=useNavigate()

    useEffect(() => {
      axios.get('http://localhost:5000/teammembersview').then((res)=>{
        setTeammember(res.data)
      })
    }, [])
    console.log(TeamMember);

    const teammembersview=(_id)=>{
      navig(`/teammembersview/${_id}`)
    }

    const editsubmit=(_id)=>{
      navig(`/teammembersedit/${_id}`)

    }

    const handledelete=(_id)=>{
      setTeammemberid(_id)
      setshow(true)
    }

    const paginationchange=({selected})=>{
      setPageNumber(selected)
      }

    const deleteTeammember=()=>{
      axios.delete(`http://localhost:5000/teammembersdelete/${Teammemberid}`).then((res)=>{
        setTeammember(TeamMember.filter(team=>team._id !== Teammemberid))
      })
      setshow(false)
    }
  
  return (
    <div className='teammembers-main'>
    <SideNavbar/>
    <div className='teammember-table-div'>
    <Table className='teammember-table'>
    <thead>
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Date of Birth</th>
    <th>Gender</th>
    <th>Description</th>
    <th>Role</th>
    <th>Phone Number</th>
    <th>Proflie Picture</th>
    <th>Changes</th>

    </tr>
    </thead>
    <tbody>
    {TeamMember.map((members)=>(
    <tr key={members._id}>
    <td>{members.Name}</td>
    <td>{members.Email}</td>
    <td>{members.DateOfBirth}</td>
    <td>{members.Gender}</td>
    <td>{members.Description}</td>
    <td>{members.Role}</td>
    <td>{members.PhoneNumber}</td>
    <td>{members.UploadProfilePicture}</td>
    <td>
    <ImEye size='25'  className='btn-icon' onClick={()=>{teammembersview(members._id)}}/>
    <RiFileEditLine size='25'  className='btn-icon' onClick={()=>{editsubmit(members._id)}}/>
     <TbTrashXFilled size='25' className='btn-icon' onClick={()=>{handledelete(members._id)}}/>
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
    <Button variant="primary" onClick={deleteTeammember}> Yes
    </Button>
  
</Modal>
    </div>
    </div>
  )
}

export default TeamMembers