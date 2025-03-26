import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage";
import LoginPage from "./screens/LoginPage/LoginPage";
import SignupPage from "./screens/SignupPage/SignupPage";
import AboutMe from "./screens/AboutMe/AboutMe";
import CreateEvent from "./screens/CreateEvent/CreateEvent";
import EventBooking from "./screens/EventBooking/EventBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/book/:id" element={<EventBooking />} /> {/* Updated route */}
      </Routes>
    </Router>
  );
}

export default App;
