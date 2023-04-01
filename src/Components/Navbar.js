import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { IoLogoWordpress } from "react-icons/io";
import { ImEqualizer } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import { FiUser } from "react-icons/fi";
function Navbar() {
  return (
    <div className="main">
      <div className="header-component">
        <div className="image_paragraph">
        <IoLogoWordpress size="40"className='logo'/>
          <p className="wasserstoff">WASSERSTOFF</p>
        </div>
        <div className="search_input">
          <input type="search" />
          <span>
          <ImSearch className="search-icon"/>
          </span>
        </div>
        <ul className="statical">
          <li> <Link to="/">Statistics</Link></li>
          <li><Link to="/Overview">Overview</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li> <Link to="/dashboard">Analytics</Link></li>
        </ul>
        <div className="user">
        <span>
        <FiUser className="user2"/>
        </span>
        <span>
        <ImEqualizer className="user1"/>
        </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
