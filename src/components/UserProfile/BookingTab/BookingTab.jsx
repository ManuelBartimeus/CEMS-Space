import React from "react";
import "./BookingTab.css";
import { bookings } from "../../../data/bookings"; // Import the bookings array
import { useUser } from "../../../context/UserContext"; // Import useUser

const Bookings = () => {
  const { loggedInUser } = useUser(); // Access the logged-in user

  // Filter bookings for the logged-in user
  const userBookings = bookings.filter(
    (booking) => booking.userId === loggedInUser?.email
  );

  return (
    <div className="bookings-container">
      <div className="filter-sort">
        <button className="filter-button">Filter By: Status</button>
        <button className="sort-button">Sort By: Date</button>
      </div>
      {userBookings.length > 0 ? (
        userBookings.map((booking, index) => (
          <div key={index} className="booking-card">
            <div className="booking-details">
              <h3>{booking.title}</h3>
              <p>
                <strong>Date:</strong> {booking.date}
              </p>
              <p>
                <strong>Location:</strong> {booking.location}
              </p>
              <p>
                <strong>Seat Number:</strong> {booking.seatNumber}
              </p>
              <p>
                <strong>Quantity:</strong> {booking.quantity}
              </p>
              <p>
                <strong>Total Paid:</strong> ${booking.price + booking.fee}
              </p>
            </div>
            <div className="booking-actions">
              <p>
                <strong>Booking ID:</strong> {booking.eventId}
              </p>
              <button className="download-button">Download PDF</button>
              <button className="cancel-button">Cancel Booking</button>
            </div>
          </div>
        ))
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default Bookings;
