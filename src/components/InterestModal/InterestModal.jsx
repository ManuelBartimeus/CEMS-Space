"use client"

import { useState } from "react"
import "./InterestModal.css"

const InterestModal = ({ onClose }) => {
  const [selectedInterests, setSelectedInterests] = useState([])

  const interests = [
    "Music",
    "Comedy",
    "Theatre",
    "Food",
    "Culture",
    "Sports",
    "Wellness",
    "Dance",
    "Festival",
    "Concert",
    "Workshop",
    "Conference",
    "Exhibition",
    "Party",
  ]

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest))
    } else {
      setSelectedInterests([...selectedInterests, interest])
    }
  }

  return (
    <div className="modal-overlay">
      <div className="interest-modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Add more to your interest</h2>
        <p>Select your interests to get more suggestions based on what you like</p>

        <div className="interests-grid">
          {interests.map((interest, index) => (
            <button
              key={index}
              className={`interest-pill ${selectedInterests.includes(interest) ? "selected" : ""}`}
              onClick={() => toggleInterest(interest)}
            >
              {interest}
            </button>
          ))}
        </div>

        <div className="modal-actions">
          <button className="skip-button" onClick={onClose}>
            Skip
          </button>
          <button
            className="save-button"
            onClick={() => {
              // Save interests logic would go here
              onClose()
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default InterestModal

