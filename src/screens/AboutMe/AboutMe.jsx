import React, { useState } from "react";
import "./AboutMe.css";
import { FaEdit } from "react-icons/fa";
import Header from "../../components/HomeScreen/Header/Header";
import Footer from "../../components/HomeScreen/Footer/Footer";
import profile from "../../assets/profile-pic.jpeg";
import { useUser } from "../../context/UserContext"; // Import useUser for accessing logged-in user
import { users } from "../../data/users"; // Import the users array
import Bookings from "../../components/UserProfile/BookingTab/BookingTab"; // Import the Bookings component
import CreationTab from "../../components/UserProfile/CreationTab/CreationTab"; // Import the CreationTab component
import CalendarTab from "../../components/UserProfile/CalendarTab/CalendarTab"; // Import the CalendarTab component

const AboutMe = () => {
  const { loggedInUser, setLoggedInUser } = useUser(); // Access the logged-in user from context
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false); // State for password reset modal
  const [activeTab, setActiveTab] = useState("User Info"); // State to track the active tab
  const [formData, setFormData] = useState({
    dateOfBirth: loggedInUser?.dateOfBirth || "",
    contactNumber: loggedInUser?.contactNumber || "",
  });
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleEditClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handlePasswordResetClick = () => {
    setIsPasswordModalOpen(true); // Open the password reset modal
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Update the logged-in user's information in the users array
    const userIndex = users.findIndex((user) => user.email === loggedInUser.email);
    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        dateOfBirth: formData.dateOfBirth,
        contactNumber: formData.contactNumber,
      };
      setLoggedInUser(users[userIndex]); // Update the logged-in user in context
    }
    setIsModalOpen(false); // Close the modal
  };

  const handlePasswordSave = () => {
    // Validate and update the password
    const userIndex = users.findIndex((user) => user.email === loggedInUser.email);
    if (userIndex !== -1) {
      if (users[userIndex].password === passwordData.oldPassword) {
        users[userIndex].password = passwordData.newPassword; // Update the password
        setLoggedInUser(users[userIndex]); // Update the logged-in user in context
        alert("Password updated successfully!");
        setIsPasswordModalOpen(false); // Close the password reset modal
      } else {
        alert("Old password is incorrect. Please try again.");
      }
    }
  };

  return (
    <div className="about-me-container">
      <Header />
      
      <main className="profile-section">
        <div className="profile-card">
          <img src={profile} alt="Profile" className="profile-image" />
          <h2 className="profile-name">
            {loggedInUser?.firstName} {loggedInUser?.lastName} <FaEdit className="edit-icon" onClick={handleEditClick} />
          </h2>
          <p><strong>Email:</strong> {loggedInUser?.email}</p>
          <p><strong>Date of Birth:</strong> {loggedInUser?.dateOfBirth || "Not provided"}</p>
          <p><strong>Contact number:</strong> {loggedInUser?.contactNumber || "Not provided"}</p>
        </div>
        <div className="tab-menu">
          <span
            className={activeTab === "User Info" ? "active" : ""}
            onClick={() => setActiveTab("User Info")}
          >
            User Info
          </span>
          <span
            className={activeTab === "Bookings" ? "active" : ""}
            onClick={() => setActiveTab("Bookings")}
          >
            Bookings
          </span>
          <span
            className={activeTab === "Creation" ? "active" : ""}
            onClick={() => setActiveTab("Creation")}
          >
            Creation
          </span>
          <span
            className={activeTab === "Calendar" ? "active" : ""}
            onClick={() => setActiveTab("Calendar")}
          >
            Calendar
          </span>
        </div>
        {activeTab === "User Info" && (
          <div className="about-description">
            <div className="status-container">
              <div className="status-item">
                <label>User Status</label>
                <div className="status-value">Active</div>
              </div>

              <div className="status-item">
                <label>User Creations</label>
                <div className="status-value">0</div>
              </div>
            </div>
            <hr className="divider" />
            <div className="password-change">
              <label>Password Change:</label>
              <button className="reset-button" onClick={handlePasswordResetClick}>
                Reset
              </button>
            </div>
          </div>
        )}
        {activeTab === "Bookings" && <Bookings />} {/* Render Bookings when the Bookings tab is selected */}
        {activeTab === "Creation" && <CreationTab />} {/* Render CreationTab when the Creation tab is selected */}
        {activeTab === "Calendar" && <CalendarTab />} {/* Render CalendarTab when the Calendar tab is selected */}
      </main>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Profile</h3>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </label>
            <label>
              Contact Number:
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </label>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {isPasswordModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Reset Password</h3>
            <label>
              Old Password:
              <input
                type="password"
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={handlePasswordChange}
              />
            </label>
            <label>
              New Password:
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />
            </label>
            <button className="save-button" onClick={handlePasswordSave}>
              Save
            </button>
            <button className="cancel-button" onClick={() => setIsPasswordModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AboutMe;
