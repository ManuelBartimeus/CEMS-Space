import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate
import { events } from "../../data/events"; // Import events array
import { bookings } from "../../data/bookings"; // Import bookings array
import { useUser } from "../../context/UserContext"; // Import useUser
import Header from "../../components/HomeScreen/Header/Header";
import Footer from "../../components/HomeScreen/Footer/Footer";
import "./EventBooking.css";

const EventBooking = () => {
  const { id } = useParams(); // Get the event ID from the route
  const event = events.find((e) => e.id === parseInt(id)); // Find the event by ID
  const { loggedInUser } = useUser(); // Access the logged-in user
  const navigate = useNavigate(); // Initialize useNavigate

  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookNow = () => {
    if (!loggedInUser) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }

    // Add the booking to the bookings array
    bookings.push({
      userId: loggedInUser.email, // Use email as the unique identifier for the user
      eventId: event.id,
      title: event.title,
      date: event.date,
      location: event.location,
      seatNumber: `A${Math.floor(Math.random() * 100)}`, // Generate a random seat number
      quantity: 1,
      price: 100, // Example price
      fee: 10, // Example fee
    });

    alert("Booking successful!"); // Notify the user
    navigate("/aboutme"); // Redirect to the AboutMe screen
  };

  if (!event) {
    return <p>Event not found</p>; // Handle case where event is not found
  }

  return (
    <div className="event-page">
      <Header />
      <div className="event-content">
        <div className="event-grid">
          <div className="event-banner">
            <img src={event.image} alt={event.title} />
          </div>
          <div className="vertical-separator"></div>
          <div className="event-details-content">
            <h2>{event.title}</h2>
            <button className="follow-btn">By {event.creator} | Follow</button>
            <div className="event-details">
              <p>
                <strong>Date:</strong> {event.date} | <strong>Time:</strong>{" "}
                {event.startTime} to {event.endTime}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Format:</strong> {event.format}
              </p>
            </div>
            <div className="event-description">
              <p>{event.description}</p>
            </div>
            <div className="event-tags">
              {event.hashtags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <button className="book-btn" onClick={handleBookNow}>
              Book your seat Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventBooking;
