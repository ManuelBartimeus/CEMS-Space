import React, { useState } from "react";
import "./CreateEvent.css";
import Header from "../../components/HomeScreen/Header/Header";
import Footer from "../../components/HomeScreen/Footer/Footer";
import { FaUpload } from "react-icons/fa6";

const CreateEvent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    pricedEvent: false,
    price: "",
    date: "",
    location: "",
    startTime: "",
    endTime: "",
    format: "",
    description: "",
    hashtags: "",
    media: [],
    invitees: [],
    budget: [],
    paymentMethod: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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
              placeholder="Event Name"
            />
            <input
              className="input-text"
              type="text"
              placeholder="Event Type"
            />
            <label className="label">
              <input className="checkbox" type="checkbox" /> Priced Event
            </label>
            <input
              className="input-number"
              type="number"
              placeholder="Price"
              disabled={!formData.pricedEvent}
            />
            <input className="input-date" type="date" />
            <input className="input-text" type="text" placeholder="Location" />
            <input
              className="input-time"
              type="time"
              placeholder="Start Time"
            />
            <input className="input-time" type="time" placeholder="End Time" />
            <textarea className="textarea" placeholder="Description"></textarea>
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
              <input className="input-file" type="file" multiple />
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
              placeholder="Add Email"
            />
            <input
              className="input-tel"
              type="tel"
              placeholder="Add Phone Number"
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
              className="input-text"
              type="text"
              placeholder="Commodity Name"
            />
            <input
              className="input-number"
              type="number"
              placeholder="Budget Allocated"
            />
            <textarea className="textarea" placeholder="Description"></textarea>
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
                name="payment"
                value="credit"
              />{" "}
              Credit/Debit Card
            </label>
            <label className="label">
              <input
                className="radio"
                type="radio"
                name="payment"
                value="paypal"
              />{" "}
              PayPal
            </label>
            <div className="button-group">
              <button
                className="publish-button"
                onClick={() => alert("Event Published!")}
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
