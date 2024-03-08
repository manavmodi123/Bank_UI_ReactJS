import React from 'react'
import "./Sidebar.css";
import logo from "../images/img_logo.png";

const Sidebar = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src={logo}  alt='logo'/>
      </div>
      <div className='sidebar-items'>
        <ul className='items'>
          <li><i className="fa-solid fa-house"></i>Dashboard</li>
          <li><i className="fa-solid fa-money-check-dollar"></i>Transactions</li>
          <li><i className="fa-solid fa-user-large"></i>Accounts</li>
          <li><i className="fa-solid fa-credit-card"></i>Credit Cards</li>
          <li><i className="fa-solid fa-thin fa-screwdriver-wrench"></i>Services</li>
          <li><i className="fa-solid fa-gear"></i>Setting</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar