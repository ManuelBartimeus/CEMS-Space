import React from "react";
import "./BookingTab.css";

const bookingsData = [
  {
    title: "Caring is the new marketing",
    date: "Nov 4, 2023 at 12:13 am",
    location: "Stockton, New Hampshire",
    seatNumber: "M02, N03",
    quantity: 2,
    price: 500,
    fee: 50,
    bookingId: "WQ0036HQ",
  },
  {
    title: "Shaffi in live concert",
    date: "Mar 13, 2023 at 08:05 am",
    location: "Lafayette, California",
    seatNumber: "M02, N03",
    quantity: 2,
    price: 500,
    fee: 50,
    bookingId: "WQ0036HQ",
  },
  // Add more bookings as needed
];

const Bookings = () => {
  return (
    <div className="bookings-container">
      <div className="filter-sort">
        <button className="filter-button">Filter By: Status</button>
        <button className="sort-button">Sort By: Date</button>
      </div>
      {bookingsData.map((booking, index) => (
        <div key={index} className="booking-card">
          <div className="booking-details">
            <h3>{booking.title}</h3>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Location:</strong> {booking.location}</p>
            <p><strong>Seat Number:</strong> {booking.seatNumber}</p>
            <p><strong>Quantity:</strong> {booking.quantity}</p>
            <p><strong>Total Paid:</strong> ${booking.price + booking.fee}</p>
          </div>
          <div className="booking-actions">
            <p><strong>Booking ID:</strong> {booking.bookingId}</p>
            <button className="download-button">Download PDF</button>
            <button className="cancel-button">Cancel Booking</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookings;
