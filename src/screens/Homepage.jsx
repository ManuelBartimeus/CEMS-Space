import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../components/HomeScreen/Header/Header";
import HeroBanner from "../components/HomeScreen/HeroBanner/HeroBanner";
import Categories from "../components/HomeScreen/Categories/Categories";
import EventSection from "../components/HomeScreen/EventSection/EventSection";
import TrendingHashtags from "../components/HomeScreen/TrendingHashtags/TrendingHashtags";
import PopularOrganizers from "../components/HomeScreen/PopularOrganizers/PopularOrganizers";
import Testimonials from "../components/HomeScreen/Testimonials/Testimonials";
import Footer from "../components/HomeScreen/Footer/Footer";
import InterestModal from "../components/HomeScreen/InterestModal/InterestModal";

import "../App.css";

import { events } from "../data/events"; // Import the events array

const Homepage = () => {
  const [showInterestModal, setShowInterestModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("SCISA");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const locations = ["SCISA", "CSS", "BCHEM", "Physics", "Food Science", "Meteorological Science"];

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setDropdownVisible(false);
  };

  const filteredEventsByCategory = selectedCategory === "All"
    ? events
    : events.filter((event) => event.category === selectedCategory);

  const filteredEventsByOrganizer = filteredEventsByCategory.filter(
    (event) => event.creator === selectedLocation
  );

  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <hr className="event-divider" />
        <EventSection events={filteredEventsByCategory} />
        <TrendingHashtags />
        <EventSection
          title={
            <div className="location-selector">
              <div className="location-text">
                Browse events for
                <button
                  className="highlighted-text"
                  onClick={() => setDropdownVisible(!dropdownVisible)}
                >
                  {selectedLocation}
                  <IoIosArrowDown />
                </button>
              </div>

              {dropdownVisible && (
                <ul className="dropdown-menu">
                  {locations.map((location) => (
                    <li
                      key={location}
                      onClick={() => handleLocationClick(location)}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          }
          events={filteredEventsByOrganizer}
        />
        <hr className="event-divider" />
        <PopularOrganizers />
        <Testimonials />
      </main>
      <Footer />
      {showInterestModal && (
        <InterestModal onClose={() => setShowInterestModal(false)} />
      )}
    </div>
  );
};

export default Homepage;