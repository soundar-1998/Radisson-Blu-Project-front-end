import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null); // To handle editing state
  const [updatedBooking, setUpdatedBooking] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    bookingDate: '',
    outDate: '',
    checkIn: '',
    checkOut: ''
  });

  useEffect(() => {
    // Check for stored mode preference in localStorage and set it
    const storedMode = localStorage.getItem("theme") === "dark";
    setDarkMode(storedMode);

    // Fetch all bookings
    axios
      .get("https://final-project-7f4r.onrender.com/booking/getBookings")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings: ", error);
        setError(error.message);
      });
  }, []);

  // Toggle light/dark mode and store preference in localStorage
  const toggleMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Handle edit button click
  const handleEditClick = (booking) => {
    setEditingBooking(booking._id);
    setUpdatedBooking({ ...booking }); // Set initial values of the selected booking
  };

  // Handle input change for updatedBooking fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBooking((prev) => ({ ...prev, [name]: value }));
  };

  // Submit the updated booking details
  const handleSubmitUpdate = () => {
    axios
      .put(`https://final-project-7f4r.onrender.com/booking/updateBooking/${editingBooking}`, updatedBooking)
      .then((response) => {
        setBookings(bookings.map((booking) => 
          booking._id === editingBooking ? response.data : booking
        ));
        setEditingBooking(null);
        alert('Booking updated successfully');
      })
      .catch((error) => {
        console.error("Error updating booking: ", error);
        setError(error.message);
      });
  };

  // Delete a booking
  const deleteBooking = (id) => {
    axios
      .delete(`https://final-project-7f4r.onrender.com/booking/deleteBooking/${id}`)
      .then(() => {
        setBookings(bookings.filter((booking) => booking._id !== id));
        alert('Booking deleted successfully!');
      })
      .catch((error) => {
        console.error("Error deleting booking: ", error);
        setError(error.message);
      });
  };

  const pageClass = darkMode ? "dark-mode" : "light-mode";

  return (
    <div className={pageClass}>
      <h1 style={{ textAlign: "center" }}>Booking Details</h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <button
        className="toggle-btn"
        onClick={toggleMode}
        style={{
          backgroundColor: darkMode ? "#f44336" : "#4caf50",
          color: "white",
          padding: "10px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {darkMode ? "Light" : "Dark"} Mode
      </button>

      {/* Edit Form */}
      {editingBooking && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
          <h3>Edit Booking</h3>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={updatedBooking.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={updatedBooking.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={updatedBooking.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={updatedBooking.contactNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Booking Date</label>
            <input
              type="date"
              name="bookingDate"
              value={updatedBooking.bookingDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Out Date</label>
            <input
              type="date"
              name="outDate"
              value={updatedBooking.outDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Check-In</label>
            <input
              type="datetime-local"
              name="checkIn"
              value={updatedBooking.checkIn}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Check-Out</label>
            <input
              type="datetime-local"
              name="checkOut"
              value={updatedBooking.checkOut}
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={handleSubmitUpdate}
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "8px 12px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Save Changes
          </button>
          <button
            onClick={() => setEditingBooking(null)}
            style={{
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "8px 12px",
              cursor: "pointer",
              marginTop: "10px",
              marginLeft: "10px",
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Booking Cards */}
      <div
        className="card-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div
              key={booking._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                width: "300px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3>{booking.firstName} {booking.lastName}</h3>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Contact:</strong> {booking.contactNumber}</p>
              <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
              <p><strong>Out Date:</strong> {booking.outDate}</p>
              <p><strong>Check-In:</strong> {booking.checkIn}</p>
              <p><strong>Check-Out:</strong> {booking.checkOut}</p>
              <button
                onClick={() => handleEditClick(booking)}
                style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteBooking(booking._id)}
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No bookings available</p>
        )}
      </div>
    </div>
  );
}

export default Users;
