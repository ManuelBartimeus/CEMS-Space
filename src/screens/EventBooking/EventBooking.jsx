import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { events } from "../../data/events"; // Import events array
import Header from "../../components/HomeScreen/Header/Header";
import Footer from "../../components/HomeScreen/Footer/Footer";
import "./EventBooking.css";

const EventBooking = () => {
  const { id } = useParams(); // Get the event ID from the route
  const event = events.find((e) => e.id === parseInt(id)); // Find the event by ID

  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <button className="book-btn">Book your seat Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventBooking;
