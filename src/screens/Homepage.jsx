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

import Excursion from "../assets/ExcursionFlyer.jpg";
import Seminar1 from "../assets/seminar_1.jpg";
import Seminar2 from "../assets/seminar_2.jpg";
import Seminar3 from "../assets/seminar_3.jpg";
import Workshop1 from "../assets/workshop_1.jpg";
import Entertainment1 from "../assets/entertainment-1.jpg";
import Career1 from "../assets/career_1.jpg";
import "../App.css";

const Events = [
  {
    id: 1,
    title: "Y33ko Cape Aba",
    date: "March 15",
    location: "Cape Coast",
    image: Excursion,
    rating: 4,
    bookmarked: false,
    category: "Entertainment",
    creator: "SCISA",
  },
  {
    id: 2,
    title: "Success Africa Summit",
    date: "Oct 18",
    location: "Bangalore",
    image: Seminar1,
    rating: 5,
    bookmarked: true,
    category: "Workshop",
    creator: "CSS",
  },
  {
    id: 3,
    title: "Music DJ Night",
    date: "Oct 20",
    location: "Hyderabad",
    image: Entertainment1,
    rating: 4,
    bookmarked: false,
    category: "Entertainment",
    creator: "SCISA",
  },
  {
    id: 4,
    title: "Food and Wine Festival",
    date: "Oct 22",
    location: "Mumbai",
    image: Seminar2,
    rating: 5,
    bookmarked: true,
    category: "Seminar",
    creator: "BCHEM",
  },
  {
    id: 5,
    title: "Indie Music / Dance",
    date: "Oct 25",
    location: "Delhi",
    image: Seminar3,
    rating: 4,
    bookmarked: false,
    category: "Entertainment",
    creator: "CSS",
  },
  {
    id: 6,
    title: "Art Exhibition",
    date: "Oct 28",
    location: "Kolkata",
    image: Workshop1,
    rating: 5,
    bookmarked: true,
    category: "Workshop",
    creator: "SCISA",
  },
  {
    id: 7,
    title: "Comedy Night",
    date: "Oct 30",
    location: "Pune",
    image: Career1,
    rating: 4,
    bookmarked: false,
    category: "Career",
    creator: "BCHEM",
  },
];

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
    ? Events
    : Events.filter((event) => event.category === selectedCategory);

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