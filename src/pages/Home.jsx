import React from 'react'
import BannerImage from "../assets/banner.jpg"
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1>Burger</h1>
        <p>Delicius hamburger <br /> with 33 Spicy</p>
        <Link to="/menu">
        <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home