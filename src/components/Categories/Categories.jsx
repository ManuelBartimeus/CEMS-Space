import "./Categories.css";
import seminar from "../../assets/seminar.png";
import hackathon from "../../assets/hackathon.png";
import career from "../../assets/career.png";
import entertainment from "../../assets/entertainment.png";
import graduation from "../../assets/graduation.png";
import workshop from "../../assets/workshop.png";

const Categories = () => {
  const categories = [
    { id: 1, name: "Seminars", image: seminar },
    { id: 2, name: "Hackathons", image: hackathon },
    { id: 3, name: "Career", image: career },
    { id: 4, name: "Entertainment", image: entertainment },
    { id: 5, name: "Workshops", image: workshop },
    { id: 6, name: "Graduation", image: graduation },
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-title">
          <h2 className="section-title">Categories</h2>
        </div>
        <div className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <div className="category-image">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                />
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
