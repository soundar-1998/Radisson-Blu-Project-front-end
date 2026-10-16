
import React, { useState } from 'react';
import './Home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const cards = [
    { img: '/Images/slider2.png', title: 'Zero Interest', desc: 'with us offer' },
    { img: '/Images/slider3.png', title: 'Couples Trip', desc: 'down payment' },
    { img: '/Images/slider4.png', title: 'Zero processing', desc: 'Fees own' },
    { img: '/Images/slider5.png', title: 'Dream of EGYPT ', desc: 'Group Tour' },
    { img: '/Images/slider6.png', title: 'Kasmir', desc: 'memories Group' },
    { img: '/Images/slider7.png', title: 'ThaiLand', desc: 'Fun Group Tour' },
    { img: '/Images/slider8.png', title: 'Baku', desc: 'Group Tour' },
    { img: '/Images/slider9.png', title: 'Singapore', desc: 'Tour' },
    
    { img: '/Images/slider11.png', title: 'South Africa', desc: 'Jungle Forest' },
    
    { img: '/Images/slider13.png', title: 'Desert', desc: 'Mummy Temple' },
    { img: '/Images/slider14.png', title: 'Golden Triangle', desc: 'Tajmahal' },
    
  ];

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
   
      <div className='maincontainer'>
   
         <div className={`body ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='theme-toggle'>
        <button className='toggle-btn' onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
<video
  autoPlay
  muted
  loop
  playsInline
  style={{ width: '100%', height: 'auto' }}
>
  <source
    src="\Videos\WhatsApp Video 2025-01-19 at 18.06.52_b7a305c4.mp4"
    type="video/mp4"
  />
</video>

        {/* Carousel Section */}
        <div className='carousal'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/Images/family.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/Images/carousal2.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/Images/carousal3.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <marquee direction="right" behavior="alternate">
        <h1>EXPLORE HOTELS</h1>
        <img src=" \Images\hall.jpeg" className="img1"/>
        <img src="\Images\bedroom.jpeg" className="img1"/>
        <img src="\Images\bedroom.jpeg" className="img1"/>
        <img src="\Images\bedroom.jpeg" className="img1"/>
        
    </marquee>
    
        {/* Popular Packages Section */}
        <h2>Popular Packages</h2>
        <div className='cards'>
          <div className="container">
            <div className="bg-1"></div>
            <div className="bg-2">
              <img src="/Images/card2.png" alt="" width="100%" height="100%" />
            </div>
            <div className="bg-3">
              <img src="/Images/card3.png" alt="" width="100%" height="100%" />
            </div>
            <div className="bg-4">
              <img src="/Images/card4.png" alt="" width="100%" height="100%" />
            </div>
            <div className="bg-5">
              <img src="/Images/card5.png" alt="" width="100%" height="100%" />
            </div>
          </div>
        </div>
     <div className='table'>
      <ul>
<img src='\Images\ul1.png' width='20%' height='25%'></img><a></a>
<img src='\Images\ul2.png' width='20%' height='25%'></img>
<img src='\Images\ul3.png' width='20%' height='25%'></img>
      </ul>
     </div>
   <div className='widimage'>
     <img src='\Images\hotelapp.png' alt='' width='100%' height='100%'></img>
   </div>
   <video className="video-player" 
   autoPlay
      muted
      loop
      playsInline
 
            style={{ width: '100%', height: 'auto' }}>
  <source src='\videos\WhatsApp Video 2025-01-19 at 19.22.15_ee819523.mp4' type="video/mp4" />
</video>

        {/* Additional Content */}
        <div className='welcomimage'>
          <img src="/Images/welcome.png" alt="" width="100%" height="100%" />
        </div>
<div className='card-slider'>
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
</div>
        <h2>Stress-Free Holidays with Radisson</h2>
        <div className='gtgroup'></div>
        <img src='\Images\Screenshot 2025-01-10 014737.png' width='100%' height='100%'></img>
        <div className='cardslider'>

        </div>

        <h2>Trending Tours</h2>
        <div className='trend'>
          <div className="gallery">
            <a href="#">
              <img src="/Images/card2.png" alt="Cinque Terre" width="600" height="400" />
            </a>
            <div className="desc">Dubai City Tour Package</div>
          </div>
          <div className="gallery">
            <a href="#">
              <img src="/Images/card3.png" alt="Forest" width="600" height="400" />
            </a>
            <div className="desc">Best of Switzerland Packages</div>
          </div>
          <div className="gallery">
            <a href="#">
              <img src="/Images/card4.png" alt="Northern Lights" width="600" height="400" />
            </a>
            <div className="desc">Amazing Singapore Tour</div>
          </div>
          <div className="gallery">
            <a href="#">
              <img src="/Images/card5.png" alt="Mountains" width="600" height="400" />
            </a>
            <div className="desc">Magical Mauritius Tour</div>
          </div>
        </div>

        {/* Testimonials Section */}
        <br></br>
        <div className='slide2'></div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          
          <div className="carousel-inner">
          <h2>Our Testimonials</h2>
          <div className='card-slider'>
<div className="custom-slider">
         </div>
</div>

            <div className="carousel-item active">
              <img src="/Images/feedback1.png" className="d-block w-60" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/Images/feedback2.png" className="d-block w-60" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/Images/feedback3.png" className="d-block w-60" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          
        </div>
      </div>
 <a href="#" class="top" ><i class="fa-solid fa-arrow-up"></i></a>
    </div>
  );
};

export default Home;
