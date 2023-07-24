import React, { useState } from "react";
import "./Navbar.css";
import { GoKebabHorizontal } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [sideshow, setsideshow] = useState(false);

  const show = () => {
    setsideshow(true);
  };
  const hide = () => {
    setsideshow(false);
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo-div">
          <span className="logo">Ecommerce-App</span>
        </div>

        <div className={sideshow ? "link-div sidebar" : "link-div"}>
          <ul>
            <li onClick={hide}>
              <a href="#" className="cool-link">
                Home
              </a>
            </li>
            <li onClick={hide}>
              <a href="#" className="cool-link">
                Categories
              </a>
            </li>
            <li onClick={hide}>
              <a href="#" className="cool-link">
                Offers
              </a>
            </li>
            <li onClick={hide}>
              <a href="#" className="cool-link">
                Wishlist
              </a>
            </li>
            <li onClick={hide}>
              <a href="#" className="cool-link">
                Cart
              </a>
            </li>
          </ul>
        </div>
        {sideshow ? (
          <div className="toggle-icon" onClick={hide}>
            <AiOutlineClose className="icon" />
          </div>
        ) : (
          <div className="toggle-icon" onClick={show}>
            <GoKebabHorizontal className="icon" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
