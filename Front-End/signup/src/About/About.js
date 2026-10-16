 // Import useState
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';

const About = () => {
   const [darkMode, setDarkMode] = useState(false);
  
   const toggleTheme = () => {
      setDarkMode(!darkMode);
   };
   const cards = [
      { img: '/Images/cinima1.png', title: 'Zero Interest', desc: 'with us offer' },
      { img: '/Images/cinima2.png', title: 'Couples Trip', desc: 'down payment' },
      { img: '/Images/cinima3.png', title: 'Zero processing', desc: 'Fees own' },
      { img: '/Images/cinima4.png', title: 'Dream of EGYPT ', desc: 'Group Tour' },
      { img: '/Images/cinima5.png', title: 'Kasmir', desc: 'memories Group' },
      { img: '/Images/cinima6.png', title: 'ThaiLand', desc: 'Fun Group Tour' },
      { img: '/Images/cinima7.png', title: 'Baku', desc: 'Group Tour' },
      { img: '/Images/slider9.png', title: 'Singapore', desc: 'Tour' },
      
      
    ];
  
   return (
    <div className={`body ${darkMode ? 'dark-mode' : 'light-mode'}`}>
           <div><img src='\Images\Screenshot 2025-01-08 001321.png' width='100%' height='100%'></img></div>
            <div className='theme-toggle'>
               <button className='toggle-btn' onClick={toggleTheme}>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
               </button>
            </div>
       <h2>OUR LOCATIONS</h2>
            <div className='table'>
      <ul>
<img src='\Images\Screenshot 2025-01-08 001333.png' width='30%' height='35%'></img>
<img src='\Images\Screenshot 2025-01-08 001342.png' width='30%' height='35%'></img>
<img src='\Images\Screenshot 2025-01-08 001349.png' width='30%' height='35%'></img>
      </ul>
      <ul>
      <img src='\Images\Screenshot 2025-01-08 001401.png' width='30%' height='35%'></img>
<img src='\Images\Screenshot 2025-01-08 001414.png' width='30%' height='35%'></img>
<img src='\Images\Screenshot 2025-01-08 001430.png' width='30%' height='35%'></img>   
      </ul>
      
      <ul>
      <img src='\Images\Screenshot 2025-01-08 001445.png' width='30%' height='35%'></img>
<img src='\Images\Screenshot 2025-01-08 001453.png' width='30%' height='35%'></img>
<img src='\Images\Screenshot 2025-01-08 001504.png' width='30%' height='35%'></img>
      </ul>
     </div>
     <div className="custom-slider">
      {cards.map((card, index) => (
        <div className="custom-card" key={index}>
          <img src={card.img} alt={card.title} className="img-fluid" />
          <div className="custom-card-body">
            <h5>{card.title}</h5>
            <p>{card.desc}</p>
          </div>
        </div>
      ))}
    </div>

<div className='location'>
      <img src='\Images\location.png' width='100%' height='100%' alt='#'></img>
</div>
     <div className='get'>
      <ul>
      <img src='\Images\Screenshot 2025-01-08 002632.png ' width='100%'height='100%'></img>

      </ul>
          
     </div>
     
     
     </div>
         
         
   );    
}

export default About;
