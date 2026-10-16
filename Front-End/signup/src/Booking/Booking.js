
import React, { useState, useContext } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalContext from '../Context/Globalstate';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const { setFormDatas } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    bookingDate: "",
    outDate: "",
    checkIn: "",
    checkOut: "",
  });

  const [profiles, setProfiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      tempErrors.email = "Email is not valid.";
    if (!formData.contactNumber.trim()) tempErrors.contactNumber = "Contact number is required.";
    else if (!/^\d{10}$/.test(formData.contactNumber))
      tempErrors.contactNumber = "Contact number must be 10 digits.";
    if (!formData.bookingDate) tempErrors.bookingDate = "Booking date is required.";
    if (!formData.outDate) tempErrors.outDate = "Out date is required.";
    if (!formData.checkIn) tempErrors.checkIn = "Check-in time is required.";
    if (!formData.checkOut) tempErrors.checkOut = "Check-out time is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('https://final-project-7f4r.onrender.com/booking/signup1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Registered successfully');
          navigate('/Login'); // Navigate to Booking page
     
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contactNumber: "",
            bookingDate: "",
            outDate: "",
            checkIn: "",
            checkOut: "",
         
          });
          
        } else {
          console.error("Error during registration:", response.statusText);
          alert("Failed to register. Please try again.");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className= {darkMode ? 'light-mode' : 'dark-mode' }>
      <div className="theme-toggle">
        <button className="btn-btn-primary" onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }} className="booking">
        <h2>ROOM RESERVATION</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div>
            <label>Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            {errors.contactNumber && (
              <p style={{ color: "red" }}>{errors.contactNumber}</p>
            )}
          </div>
          <div>
            <label>Booking Date:</label>
            <input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
            />
            {errors.bookingDate && <p style={{ color: "red" }}>{errors.bookingDate}</p>}
          </div>
          <div>
            <label>OutDate:</label>
            <input
              type="date"
              name="outDate"
              value={formData.outDate}
              onChange={handleChange}
            />
            {errors.outDate && <p style={{ color: "red" }}>{errors.outDate}</p>}
          </div>
          <div>
            <label>Check-In Time:</label>
            <input
              type="time"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
            />
            {errors.checkIn && <p style={{ color: "red" }}>{errors.checkIn}</p>}
          </div>
          <div>
            <label>Check-Out Time:</label>
            <input
              type="time"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
            />
            {errors.checkOut && <p style={{ color: "red" }}>{errors.checkOut}</p>}
          </div>
          <button  className=' btn btn-secondary'type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
