import React, { useState, useContext } from 'react';
import './Register.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { GlobalContext } from '../Context/Globalstate';
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate();
  
  const { setUsers } = useContext(GlobalContext);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    age: '',
    email: '',
    password: '',
    confirmpassword: '',
    contact: '',
    flatno: '',
    area: '',
    pincode: '',
    landmark: '',
    towncity: '',
    state: '',
    country: '',
    addaddress: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!user.firstname) newErrors.firstname = 'First name is required';
    if (!user.lastname) newErrors.lastname = 'Last name is required';
    if (!user.age) newErrors.age = 'Age is required';
    if (!user.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!user.password || user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (user.password !== user.confirmpassword) {
      newErrors.confirmpassword = 'Passwords do not match';
    }if(!user.contact)newErrors.contact=' enter the 10 number';
    if(!user.flatno)newErrors.flatno=' enter the flat number required';
    if(!user.area)newErrors.area=' enter the required in area name';
    if(!user.pincode)newErrors.pincode='enter the proper pincode'
    if(!user.landmark)newErrors.landmark=' please enter the landmark';
    if(!user.towncity)newErrors.towncity=' please enter the tower city';
    if(!user.state)newErrors.state=' please enter the State';
    if(!user.country)newErrors.country=' please enter the country';



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // http://localhost:5000
  const handleAdd = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post('https://final-project-7f4r.onrender.com/app/signup', user)
        .then((response) => {
          alert('Registered successfully');
          navigate('/booking'); // Navigate to Booking page
     
          setUser({
            firstname: '',
            lastname: '',
            age: '',
            email: '',
            password: '',
            confirmpassword: '',
            contact: '',
            flatno: '',
            area: '',
            pincode: '',
            landmark: '',
            towncity: '',
            state: '',
            country: '',
            addaddress: ''
          });
        })
        .catch((error) => {
          console.error("There was an error registering!", error);
        });
    }
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`home ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="home_container">
        <button onClick={toggleMode} className="toggle-mode-btn">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        
        <div className="home_formContainer">
          <h1 className="home_title">REGISTER</h1>
          <form onSubmit={handleAdd}>
            <div className="input-group">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={user.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <span className="error">{errors.firstname}</span>}


 
              <input
              type="text"
              name="lastname"
              placeholder="Enter Lastname Here"
              value={user.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <span className="error">{errors.lastname}</span>}

            <input
              type="number"
              name="age"
              placeholder="Enter Age Here"
              value={user.age}
              onChange={handleChange}
            />
            {errors.age && <span className="error">{errors.age}</span>}

            <input
              type="text"
              name="email"
              placeholder="Enter Email Here"
              value={user.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="password"
              name="password"
              placeholder="Enter Password Here"
              value={user.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}

            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password Here"
              value={user.confirmpassword}
              onChange={handleChange}
            />
            {errors.confirmpassword && <span className="error">{errors.confirmpassword}</span>}

            <input
              type="number"
              name="contact"
              placeholder="Enter Contact Here"
              value={user.contact}
              onChange={handleChange}
            />
            {errors.contact && <span className="error">{errors.contact}</span>}

            <input
              type="text"
              name="flatno"
              placeholder="Enter Flat No Here"
              value={user.flatno}
              onChange={handleChange}
            />
            {errors.flatno && <span className="error">{errors.flatno}</span>}

            <input
              type="text"
              name="area"
              placeholder="Enter Area Name Here"
              value={user.area}
              onChange={handleChange}
            />
            {errors.area && <span className="error">{errors.area}</span>}

            <input
              type="number"
              name="pincode"
              placeholder="Enter Pincode Here"
              value={user.pincode}
              onChange={handleChange}
            />
            {errors.pincode && <span className="error">{errors.pincode}</span>}

            <input
              type="text"
              name="landmark"
              placeholder="Enter Landmark Here"
              value={user.landmark}
              onChange={handleChange}
            />
            {errors.landmark && <span className="error">{errors.landmark}</span>}

            <input
              type="text"
              name="towncity"
              placeholder="Enter Town/City Here"
              value={user.towncity}
              onChange={handleChange}
            />
            {errors.towncity && <span className="error">{errors.towncity}</span>}

            <input
              type="text"
              name="state"
              placeholder="Enter State Here"
              value={user.state}
              onChange={handleChange}
            />
            {errors.state && <span className="error">{errors.state}</span>}

            <input
              type="text"
              name="country"
              placeholder="Enter Country Here"
              value={user.country}
              onChange={handleChange}
            />
            {errors.country && <span className="error">{errors.country}</span>}

            <input
                type="text"
                name="addaddress"
                placeholder="Enter Address Details Here"
                value={user.addaddress}
                onChange={handleChange}
             />
             {errors.addaddress && <span className="error">{errors.addaddress}</span>}
            



            </div>
            {/* Add other inputs similarly */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
