import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home  from './Home/Home'
import Navbar from './Navbar/Navbar'
import Register from './Register/Register'
import Login from './Login/Login'
import Booking from './Booking/Booking'
import Users from './Users/Users'
import Service from './Service/Service'
import About from './About/About'
import Footer from'./Footer/Footer'
import Chat from './Chat/ChatBox'

import { GlobalProvider } from './Context/Globalstate'


const App = () => {
  return (
 
<GlobalProvider>
<BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/users" element={<Users/>}></Route> 
      <Route path="/Booking" element={<Booking/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    
  </Routes>
  <Footer></Footer>
  
  </BrowserRouter>

</GlobalProvider>

 

  )
}
<Home/>
export default App
