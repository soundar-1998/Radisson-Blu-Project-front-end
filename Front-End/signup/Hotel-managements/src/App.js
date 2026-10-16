import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home  from './Home/Home'
import Navbar from './Navbar/Navbar'
import Login from './Login/Login'
import Booking from './Booking/Booking'
import Users from './Users/Users'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import About from './About/About'
import { GlobalProvider } from './Context/Globalstate'

const App = () => {
  return (
 
<GlobalProvider>
<BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={<register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/booking" element={<Booking/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about" element={<About/>}></Route>


          </Routes>
          
  </BrowserRouter>

</GlobalProvider>

 

  )
}

export default App
