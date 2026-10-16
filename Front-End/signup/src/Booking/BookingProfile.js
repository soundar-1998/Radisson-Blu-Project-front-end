import React from 'react'
import React, { useState, useContext } from "react";
const BookingProfile = () => {
    const [profiles, setProfiles] = useState([]);
  return (
    <div>
         <h2>Profiles</h2>
        {profiles.map((profile) => (
          <div
            key={profile.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <p>First Name: {profile.firstName}</p>
            <p>Last Name: {profile.lastName}</p>
            <p>Email: {profile.email}</p>
            <p>Contact Number: {profile.contactNumber}</p>
            <p>Booking Date: {profile.bookingDate}</p>
            <p>OutDate:{profile.outDate}</p>
            <p>Check-In Time: {profile.checkIn}</p>
            <p>Check-Out Time: {profile.checkOut}</p>
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </div>
        ))}
      </div>

    
  )
}

export default BookingProfile