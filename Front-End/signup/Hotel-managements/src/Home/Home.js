// import React from 'react'
// import './Home.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// const Home = () => {
//   return (
//     <div className='body'>
// <div className='maincontainer'>
//   <div className='carousal'>
//   <div id="carouselExampleFade" class="carousel slide carousel-fade">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="\Images\carousal1.png" class="d-block w-100" alt="..."></img>
//     </div>
//     <div class="carousel-item">
//       <img src="\Images\carousal2.png" class="d-block w-100" alt="..."></img>
//     </div>
//     <div class="carousel-item">
//       <img src="\Images\carousal3.png" class="d-block w-100" alt="..."></img>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
// <h2>Popular packages</h2>
// <div className='cards'>
// <div class="container">
//     <div class="bg-1">
//  </div>
//     <div class="bg-2">
//       <img src='\Images\card2.png' alt='' width='100%' height='100%'></img>
//     </div>
//     <div class="bg-3">
//     <img src='\Images\card3.png' alt='' width='100%' height='100%'></img>
  
//     </div>
//     <div class="bg-4">
//     <img src='\Images\card4.png' alt='' width='100%' height='100%'></img>
  
//      </div>
//     <div class="bg-5">
//     <img src='\Images\card5.png' alt='' width='100%' height='100%'></img>
  
//     </div>
 
// </div>

// </div>
//   </div>
//   <div className='table'>
//     <ul>
//       <img src='\Images\ul1.png' alt='' height='20%' width='25%'></img>
//       <img src='\Images\ul2.png' alt=''height='20%' width='25%'></img>
//       <img src='\Images\ul3.png' alt=''height='20%' width='25%'></img>
//        </ul>
//   </div>
//   <div className='widimage'>
//     <img src='\Images\win.png' alt='' width='100%' height='100%'></img>
//   </div>
// <div className='welcomimage'>
//   <img src='\Images\welcomeImg.png' alt='' width='100%' height='100%'></img>
// </div>
// <h2> Stress- Free Holidays with GT</h2>
//   <div className='cardslider'>
    
//   </div>
// </div>


//     </div>
//   )
// }

// export default Home
import React from 'react';
import './Home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="body">

      <div className="maincontainer">

        <div className="carousal">

          <div id="carouselExampleFade" className="carousel slide carousel-fade">

            <div className="carousel-inner">

              <div className="carousel-item active">
                <img 
                  src="/Images/carousal1.png" 
                  className="d-block w-100" 
                  alt="carousel1" 
                />
              </div>

              <div className="carousel-item">
                <img 
                  src="/Images/carousal2.png" 
                  className="d-block w-100" 
                  alt="carousel2" 
                />
              </div>

              <div className="carousel-item">
                <img 
                  src="/Images/carousal3.png" 
                  className="d-block w-100" 
                  alt="carousel3" 
                />
              </div>

            </div>


            <button 
              className="carousel-control-prev" 
              type="button" 
              data-bs-target="#carouselExampleFade" 
              data-bs-slide="prev"
            >

              <span className="carousel-control-prev-icon"></span>

            </button>


            <button 
              className="carousel-control-next" 
              type="button" 
              data-bs-target="#carouselExampleFade" 
              data-bs-slide="next"
            >

              <span className="carousel-control-next-icon"></span>

            </button>


          </div>


          <h2>Popular packages</h2>


          <div className="cards">

            <div className="container">


              <div className="bg-1">
              </div>


              <div className="bg-2">
                <img 
                  src="/Images/card2.png" 
                  alt="card2"
                  width="100%"
                  height="100%"
                />
              </div>


              <div className="bg-3">

                <img 
                  src="/Images/card3.png" 
                  alt="card3"
                  width="100%"
                  height="100%"
                />

              </div>


              <div className="bg-4">

                <img 
                  src="/Images/card4.png" 
                  alt="card4"
                  width="100%"
                  height="100%"
                />

              </div>


              <div className="bg-5">

                <img 
                  src="/Images/card5.png" 
                  alt="card5"
                  width="100%"
                  height="100%"
                />

              </div>


            </div>

          </div>


        </div>



        <div className="table">

          <ul>

            <img 
              src="/Images/ul1.png" 
              alt="ul1"
              height="20%"
              width="25%"
            />

            <img 
              src="/Images/ul2.png" 
              alt="ul2"
              height="20%"
              width="25%"
            />


            <img 
              src="/Images/ul3.png" 
              alt="ul3"
              height="20%"
              width="25%"
            />

          </ul>

        </div>



        <div className="widimage">

          <img 
            src="/Images/win.png" 
            alt="win"
            width="100%"
            height="100%"
          />

        </div>



        <div className="welcomimage">

          <img 
            src="/Images/welcomeImg.png" 
            alt="welcome"
            width="100%"
            height="100%"
          />

        </div>



        <h2>Stress-Free Holidays with GT</h2>


        <div className="cardslider">

        </div>


      </div>

    </div>
  );
}


export default Home;