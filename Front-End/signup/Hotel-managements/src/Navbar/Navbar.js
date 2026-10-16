import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const navbar = () => {
  return (
 <nav>
    <h1>WELCOME HOTEL</h1>
    <ul>
    <Link to= "/">Home</Link>
        <Link to= "/register">register</Link>
        <p></p>
        <Link to="/login">Login</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
    </ul>
 </nav>




    
  )
}

export default navbar