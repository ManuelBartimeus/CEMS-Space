import React from "react";
import "./CreationTab.css";
import { creations } from "../../../data/creations"; // Import creations array
import { useUser } from "../../../context/UserContext"; // Import useUser

const CreationTab = () => {
  const { loggedInUser } = useUser(); // Access the logged-in user

  // Filter creations for the logged-in user
  const userCreations = creations.filter(
    (creation) => creation.userId === loggedInUser?.email
  );

  return (
    <div className="creation-tab">
      <h2>My Created Events</h2>
      <div className="events-list">
        {userCreations.length > 0 ? (
          userCreations.map((creation, index) => (
            <div key={index} className="event-card">
              <img
                src={creation.event.image}
                alt={creation.event.title}
                className="event-image"
              />
              <div className="event-content">
                <h3>{creation.event.title}</h3>
                <p>{creation.event.date}</p>
                <p>{creation.event.location}</p>
                <p>{creation.event.startTime} - {creation.event.endTime}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No events created yet.</p>
        )}
      </div>
    </div>
  );
};

export default CreationTab;
