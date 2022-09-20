import React from 'react'
import './banner.css'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
        <nav class="navbar">
     <div class="logo">MUO</div>
     My REAL ESTATE
     <ul class="nav-links">
       
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       
       <div class="menu">
       <Link to="update">List</Link>
       <Link to="about">About</Link>
       <Link to="services" className='services'>Services</Link>
       </div>
     </ul>
   </nav>
    </div>
  )
}

export default Banner