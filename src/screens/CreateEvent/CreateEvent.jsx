import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // Import useUser
import { creations } from "../../data/creations"; // Import creations array
import { events } from "../../data/events"; // Import events array
import "./CreateEvent.css";
import Header from "../../components/HomeScreen/Header/Header";
import Footer from "../../components/HomeScreen/Footer/Footer";
import { FaUpload } from "react-icons/fa6";

const CreateEvent = () => {
  const { loggedInUser } = useUser(); // Access the logged-in user
  const navigate = useNavigate(); // Initialize useNavigate

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    startTime: "",
    endTime: "",
    description: "",
    category: "",
    image: "", // Store the uploaded image URL
    pricedEvent: false,
    price: "",
    format: "",
    hashtags: "",
    media: [],
    invitees: [],
    budget: [],
    paymentMethod: "",
  });

  const [previewImage, setPreviewImage] = useState(null); // State to store the preview image URL

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a temporary URL for the uploaded image
      setPreviewImage(imageUrl); // Set the preview image
      setFormData({
        ...formData,
        image: imageUrl, // Store the temporary URL in the form data
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loggedInUser) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }

    const newEvent = {
      id: events.length + 1, // Generate a new ID based on the events array
      title: formData.title,
      date: formData.date,
      location: formData.location,
      startTime: formData.startTime,
      endTime: formData.endTime,
      description: formData.description,
      category: formData.category,
      image: formData.image || "/placeholder.svg", // Use the uploaded image or a default placeholder
      creator: loggedInUser.email, // Set the creator as the logged-in user
      rating: 0,
      bookmarked: false,
      format: "In-person",
      hashtags: [],
      media: [],
      invitees: [],
      budget: [],
      paymentMethod: "Credit/Debit Card",
    };

    // Add the new event to the creations array
    creations.push({
      userId: loggedInUser.email,
      event: newEvent,
    });

    // Add the new event to the events array
    events.push(newEvent);

    alert("Event created successfully!"); // Notify the user
    navigate("/aboutme?tab=creation"); // Redirect to the AboutMe screen with the CreationTab active
  };

  return (
    <div id="create-event-container">
      <Header />
      <main id="create-event-section">
        <div id="step-indicator">Step {step} of 5</div>
        {step === 1 && (
          <div id="basic-info">
            <hr />
            <h2 className="section-title">Basic Info</h2>
            <input
              className="input-text"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Event Name"
              required
            />
            <input
              className="input-text"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Event Type"
              required
            />
            <label className="label">
              <input
                className="checkbox"
                type="checkbox"
                name="pricedEvent"
                checked={formData.pricedEvent}
                onChange={(e) =>
                  setFormData({ ...formData, pricedEvent: e.target.checked })
                }
              />{" "}
              Priced Event
            </label>
            <input
              className="input-number"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              disabled={!formData.pricedEvent}
            />
            <input
              className="input-date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              className="input-text"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
            />
            <input
              className="input-time"
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              placeholder="Start Time"
              required
            />
            <input
              className="input-time"
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              placeholder="End Time"
              required
            />
            <textarea
              className="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              required
            ></textarea>
            {/* <div className="upload-section">
              <label htmlFor="image-upload" className="upload-label">
                Upload Event Image:
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {previewImage && (
                <div className="image-preview">
                  <img src={previewImage} alt="Preview" />
                </div>
              )}
            </div> */}
            <div className="button-group">
              <button className="next-button" onClick={nextStep}>
                Save & Continue
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div id="upload-media">
            <hr />
            <h2 className="section-title">Upload Media</h2>
            <div className="upload-icon-container">
              <FaUpload className="upload-icon" />
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {previewImage && (
                <div className="image-preview">
                  <img src={previewImage} alt="Preview" />
                </div>
              )}
            </div>
            <hr />
            <div className="button-group">
              <button className="next-button" onClick={nextStep}>
                Save & Continue
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div id="invite-info">
            <hr />
            <h2 className="section-title">Invite Info</h2>
            <input
              className="input-email"
              type="email"
              name="invitees"
              value={formData.invitees}
              onChange={handleChange}
              placeholder="Add Email"
            />
            <div className="button-group">
              <button className="next-button" onClick={nextStep}>
                Save & Continue
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div id="budget-info">
            <hr />
            <h2 className="section-title">Budget</h2>
            <input
              className="input-number"
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Budget Allocated"
            />
            <div className="button-group">
              <button className="next-button" onClick={nextStep}>
                Save & Continue
              </button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div id="payment-info">
            <hr />
            <h2 className="section-title">Payment Info</h2>
            <label className="label">
              <input
                className="radio"
                type="radio"
                name="paymentMethod"
                value="credit"
                checked={formData.paymentMethod === "credit"}
                onChange={handleChange}
              />{" "}
              Credit/Debit Card
            </label>
            <label className="label">
              <input
                className="radio"
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === "paypal"}
                onChange={handleChange}
              />{" "}
              PayPal
            </label>
            <div className="button-group">
              <button
                className="publish-button"
                onClick={handleSubmit}
              >
                Publish Event
              </button>
            </div>
          </div>
        )}
        {step > 1 && (
          <div className="button-group">
            <button className="back-button" onClick={prevStep}>
              Back
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CreateEvent;
