import React from 'react'
import Logo from "../assets/hamburgerlogo.png";
import { Link, link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="leftSide">
        <img src={Logo} alt="" />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">contact</Link>
      </div>
    </div>
  )
}

export default Navbar