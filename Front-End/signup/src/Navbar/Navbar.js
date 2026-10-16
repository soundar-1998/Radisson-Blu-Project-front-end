// import React from 'react'
// import {Link} from 'react-router-dom'
// import './Navbar.css'

// const navbar = () => {
//   return (
//     <div>
// <nav>
//   <img src='\Images\Screenshot 2025-01-08 141147.png' width='20%' height='30%' alt=''></img>
    
//     <ul>
//     <Link to= "/">Home</Link>
        
//         <p></p>
//         <Link to="/login">Login</Link>
//         <Link to="/about">About</Link>
//         <Link to="/service">Service</Link>
      
        
        
        
//     </ul>
//  </nav>




//     </div>
 
    
//   )
// }

// export default navbar
import React from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const Navigate=useNavigate();
  const Login=()=>
  {
    Navigate('/login');
  }
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="logo">
      <img src='\Images\Screenshot 2025-01-08 141147.png' width='20%' height='30%' alt=''></img>
      </div>
      <div className="nav">
        <button className="navbar-toggler" type="button" data-bs-target="#navbarNav" data-bs-toggle="collapse"> 
          <span class="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <Link to= "/">Home</Link>
                 <p></p>
                 <Link to="/login">Login</Link>
                 <Link to="/about">About</Link>
                 <Link to="/service">Service</Link>
              </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
