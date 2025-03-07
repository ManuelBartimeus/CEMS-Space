"use client"

import { useState } from "react"
import "./EventCard.css"

const EventCard = ({ event }) => {
  const [isBookmarked, setIsBookmarked] = useState(event.bookmarked || false)

  const toggleBookmark = (e) => {
    e.preventDefault()
    setIsBookmarked(!isBookmarked)
  }

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image || "/placeholder.svg"} alt={event.title} />
        <button className={`bookmark-button ${isBookmarked ? "active" : ""}`} onClick={toggleBookmark}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={isBookmarked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
        <div className="event-rating">
          <span>{event.rating}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
      </div>
      <div className="event-info">
        <h3 className="event-title">{event.title}</h3>
        <div className="event-meta">
          <span className="event-date">{event.date}</span>
          <span className="event-location">{event.location}</span>
        </div>
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  )
}

export default EventCard

