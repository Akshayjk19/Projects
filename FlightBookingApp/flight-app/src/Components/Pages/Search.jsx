import React from "react";
import "./Search.css";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

function Search() {
  return (
    <div className="search">
      <div className="section-container">

        <div className="button">
          <div className="single-button">
            <span>Economy</span>
          </div>

          <div className="single-button">
            <span>Business Class</span>
          </div>

          <div className="single-button">
            <span>First Class</span>
          </div>
        </div>

        <div className="search-input">
        
          <div className="single-input">
            <div className="search-icon-div">
              <BiCurrentLocation className="search-icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where do you want to go?" />
            </div>
          </div>

          <div className="single-input">
            <div className="search-icon-div">
              <MdOutlinePersonPinCircle className="search-icon" />
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder="Add guests" />
            </div>
          </div>

          <div className="single-input">
            <div className="search-icon-div">
              <SlCalender className="search-icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          <div className="single-input">
            <div className="search-icon-div">
              <SlCalender className="search-icon" />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add date" />
            </div>
          </div>

          <button className="search-button">Search Flight</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
