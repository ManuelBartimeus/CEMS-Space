import React from "react";
import "./CreationTab.css";

const events = [
  {
    title: "Start a blog to reach your creative peak",
    time: "01:34 PM",
    date: "Saturday, Jul 12",
    location: "Syracuse, Connecticut",
    image: "/images/event1.jpg",
  },
  {
    title: "Caring is the new marketing",
    time: "01:34 PM",
    date: "Friday, Jun 8",
    location: "Coppell, Virginia",
    image: "/images/event2.jpg",
  },
  // Add more event objects here
];

const CreationTab = () => {
  return (
    <div className="creation-tab">
      <div className="filter-sort-container">
        <div className="filter">
          <span>Filter By:</span>
          <select>
            <option>Status</option>
          </select>
        </div>
        <div className="sort">
          <span>Sort By:</span>
          <button className="sort-button">Date</button>
          <button className="sort-button">Location</button>
        </div>
      </div>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.time}</p>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
            <button className="invite-button">Invite</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreationTab;
