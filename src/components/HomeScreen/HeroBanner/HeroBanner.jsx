import "./HeroBanner.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="event-details">
          <h1>The CYBERTALK</h1>
          <p className="event-tagline">Dr. Owusu-Agyeman</p>
          <p className="event-venue">
            <IoLocationSharp className="position-icon" />
            GF1 Auditorium
          </p>
          <p className="event-date">
            <MdDateRange className="position-icon" />
            25th March, 2025
          </p>
          <button className="tickets-button">REGISTER</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
