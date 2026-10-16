const express = require('express');
const router = express.Router();
const BookingModel = require('../model/BookingModel');

// POST method: Add booking data
router.post('/signup1', (request, response) => {
    const booking_data1 = new BookingModel({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        contactNumber: request.body.contactNumber,
        bookingDate: request.body.bookingDate,
        outDate: request.body.outDate,
        checkIn: request.body.checkIn,
        checkOut: request.body.checkOut,
    });
    booking_data1.save()
        .then(data1 => {
            response.json(data1);
            console.log(data1);
            console.log("Booking_Data added successfully");
        })
        .catch(error => {
            console.log(error);
            response.json(error);
        });
});

// GET method: Fetch all booking data
router.get('/getBookings', (request, response) => {
    BookingModel.find()
        .then(data => {
            response.json(data);
        })
        .catch(error => {
            console.log(error);
            response.json(error);
        });
});

// PUT method: Update booking by ID
router.put('/updateBooking/:id', (request, response) => {
    BookingModel.findByIdAndUpdate(request.params.id, request.body, { new: true })
        .then((updatedBooking) => {
            response.json(updatedBooking);
            console.log("Booking updated successfully:", updatedBooking);
        })
        .catch((error) => {
            console.log(error);
            response.json(error);
        });
});


// DELETE method: Delete booking by ID
router.delete('/deleteBooking/:id', (request, response) => {
    BookingModel.findByIdAndDelete(request.params.id)
        .then(() => {
            response.json({ message: "Booking deleted successfully" });
            console.log("Booking deleted successfully");
        })
        .catch(error => {
            console.log(error);
            response.json(error);
        });
});

module.exports = router;
