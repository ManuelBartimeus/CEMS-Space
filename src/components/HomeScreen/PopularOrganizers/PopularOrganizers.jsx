import "./PopularOrganizers.css";
import Scisa from "../../../assets/organizers/scisa.png";
import Bchem from "../../../assets/organizers/bchem.png";
import Physics from "../../../assets/organizers/physics.png";
import Css from "../../../assets/organizers/css.png";
import { HiViewGrid } from "react-icons/hi";

const PopularOrganizers = () => {
  const organizers = [
    { id: 1, name: "Science Students Association (SCISA)", image: Scisa },
    { id: 2, name: "Biochemistry Students Association", image: Bchem },
    { id: 3, name: "Physics Students Association", image: Physics },
    { id: 4, name: "Computer Science Society (CSS)", image: Css },
  ];

  return (
    <section className="popular-organizers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Popular Organizers</h2>
          <button className="view-all-button">
            <div className="view-button-container">
              <HiViewGrid /> <p>View All</p>
            </div>
          </button>
        </div>
        <div className="organizers-grid">
          {organizers.map((organizer) => (
            <div className="organizer-card" key={organizer.id}>
              <div className="organizer-image">
                <img
                  src={organizer.image || "/placeholder.svg"}
                  alt={organizer.name}
                />
              </div>
              <h3>{organizer.name}</h3>
              <button className="follow-button">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularOrganizers;
