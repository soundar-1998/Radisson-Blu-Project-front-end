import React, { useState } from 'react'; // Import useState
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const Service = () => {
   const [darkMode, setDarkMode] = useState(false);
  
   const toggleTheme = () => {
      setDarkMode(!darkMode);
   };
  
   return (
    <div className={`body ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      
            <div className='theme-toggle'>
               <button className='toggle-btn' onClick={toggleTheme}>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
               </button>
               
            </div>
            <br></br>
            <div className='main'>
               <img src='\Images\Screenshot 2025-01-19 084308.png' width='100%' height='100%'></img>
     </div>
     <table>
      <ur>
      <img src='\Images\Screenshot 2025-01-08 141447.png'width='50%'></img>
      <img src='\Images\rate.png'width='50%' ></img>
      </ur>
<ur>
<img src='\Images\Screenshot 2025-01-08 141512.png'width='50%'></img>
<img src='\Images\Screenshot 2025-01-08 141500.png' width='50%'></img>
</ur>

     </table>
     <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
      <a href="https://www.radissonhotels.com/en-us/destination/netherlands/amsterdam" class="btn " role="button">Overview</a>&nbsp;&nbsp;
      </li>
      <br></br>
      <li class="nav-item">
      <a href="https://www.radissonhotels.com/en-us/destination/netherlands/amsterdam" class="btn btn-Secondary" role="button">room</a>&nbsp;&nbsp;
         </li>
         <br></br>
      <li class="nav-item">
      <a href="https://www.radissonhotels.com/en-us/destination/netherlands/amsterdam" class="btn btn-Secondary" role="button">Meeting & Events</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </li>
      <li class="nav-item">
      <a href="https://www.radissonhotels.com/en-us/destination/netherlands/amsterdam" class="btn btn-Secondary" role="button">Fitness</a>&nbsp;&nbsp;
      </li>
    </ul>
  </div>
</nav>
<img src='\Images\Screenshot 2025-01-10 021754.png' width='100%' height='100%'></img>
     <img src='\Images\theclub.png' width='100%' height='100%'></img>
   <div className='highlight'>
      <ur>
      <img src='\Images\Screenshot 2025-01-10 022041.png' width='25%' height='10%'></img>&nbsp;&nbsp;
      <img src='\Images\Screenshot 2025-01-10 022054.png' width='25%' height='10%'></img>&nbsp;&nbsp;
      <img src='\Images\Screenshot 2025-01-10 022107.png' width='25%' height='10%'></img>&nbsp;&nbsp;


      </ur>
   </div>
   <div className='service'>
      <h2>Service</h2>
   <ur>
    <img src='\Images\accessibility.png'></img>&nbsp;&nbsp;
    <img src='\Images\bar.png'></img>&nbsp;&nbsp;
    <img src='\Images\bicycle.png'></img>&nbsp;&nbsp;
    <img src='\Images\breakfast.png'></img>&nbsp;&nbsp;
    <img src='\Images\breakfastbuffet.png'></img>&nbsp;&nbsp;
    <img src='\Images\car rental.png'></img>&nbsp;&nbsp;
    <img src='\Images\complimentary.png'></img>&nbsp;&nbsp;
    <img src='\Images\complimenttary cookies.png'></img>&nbsp;&nbsp;
    <img src='\Images\cots.png'></img>&nbsp;&nbsp;
    <img src='\Images\dry cleaning.png'></img>&nbsp;&nbsp;
    <img src='\Images\express.png'></img>&nbsp;&nbsp;
    <img src='\Images\fitness.png'></img>&nbsp;&nbsp;
    <img src='\Images\free wifi.png'></img>&nbsp;&nbsp;
    <img src='\Images\ice machine.png'></img>&nbsp;&nbsp;
    <img src='\Images\indoor.png'></img>&nbsp;&nbsp;
    <img src='\Images\Laundry.png'></img>&nbsp;&nbsp;
    <img src='\Images\luggage.png'></img>&nbsp;&nbsp;
    <img src='\Images\meeting.png'></img>&nbsp;&nbsp;
    <img src='\Images\smoking.png'></img>&nbsp;&nbsp;
    <img src='\Images\on site.png'></img>&nbsp;&nbsp;
    <img src='\Images\parking.png'></img>&nbsp;&nbsp;
    <img src='\Images\read it.png'></img>&nbsp;&nbsp;
    <img src='\Images\room.png'></img>&nbsp;&nbsp;
    <img src='\Images\running.png'></img>&nbsp;&nbsp;
    <img src='\Images\safety.png'></img>&nbsp;&nbsp;
    <img src='\Images\sport.png'></img>&nbsp;&nbsp;
    <img src='\Images\incentive.png'></img>&nbsp;&nbsp;
     </ur>
   </div>
<div className='large'>
   <img src='\Images\Screenshot 2025-01-09 202223.png' width='100%'height='100%'></img>
</div>


     
         </div>
         
   );    
}

export default Service;
