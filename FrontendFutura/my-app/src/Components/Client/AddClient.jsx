import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SideNavbar from "../SideNavbar";
import "./AddClient.css";
import { useNavigate } from "react-router-dom";

function AddClient() {
  const [Name, setName] = useState('');
  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [SignedStatus, setSignedStatus] = useState('');
  const [Role, setRole] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const addclient = async (event) => {
    event.preventDefault();
    const clientdata = await axios.post("http://localhost:5000/client",{Name,UserName,Email,SignedStatus,Role,PhoneNumber})
    console.log(clientdata.data);

    navigate('/Client')
  };
  return (
    <div className="d-flex">
      <SideNavbar />
      <div className="m-auto">
        <form className="client-form text-center">
          <div className="client-input-group">
            <input
              type="text"
              placeholder="Name"
              className="client-input"
              value={Name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
          </div>
          <div className="client-input-group">
            <input
              type="text"
              placeholder="Username"
              className="client-input"
              value={UserName}
              onChange={(e)=>{
                setUserName(e.target.value)
              }}
            />
          </div>
          <div className="client-input-group">
            <input
              type="email"
              placeholder="Email Address"
              className="client-input"
              value={Email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="client-select">
            <h4>Signed Status:-</h4>
            <label>Signed</label>
            <input
              type="radio"
              aria-label="Signed"
              name="status"
              className="client-input"
              value="true"
              checked={SignedStatus === "true"}
              onChange={(e)=>{
                setSignedStatus(e.target.value)
              }}
            />
            <label>Not Signed</label>
            <input
              type="radio"
              aria-label="Not Signed"
              name="status"
              className="client-input"
              value="false"
              checked={SignedStatus === "false"}
              onChange={(e)=>{
                setSignedStatus(e.target.value)
              }}
            />
          </div>
          <div className="client-input-group">
            <h4>Role:-</h4>
            <select value={Role} onChange={(e)=>{
              setRole(e.target.value)
            }}>
              <span>Role</span>
              <option value="">Select</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Only By Admin">Only By Admin</option>
            </select>
          </div>
          <div className="client-input-group">
            <input
              type="number"
              placeholder="Phone Number"
              className="client-input"
              value={PhoneNumber}
              onChange={(e)=>{
                setPhoneNumber(e.target.value)
              }}
            />
          </div>
          <button className="client-btn" type="submit" onClick={addclient}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddClient;
