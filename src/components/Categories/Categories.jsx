import "./Categories.css";
import seminar from "../../assets/category-icons/seminar.png";
import hackathon from "../../assets/category-icons/hackathon.png";
import career from "../../assets/category-icons/career.png";
import entertainment from "../../assets/category-icons/entertainment.png";
import graduation from "../../assets/category-icons/graduation.png";
import workshop from "../../assets/category-icons/workshop.png";
import all_events from "../../assets/category-icons/all-events.png"

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { id: 1, name: "All", image: all_events },
    { id: 2, name: "Seminar", image: seminar },
    { id: 3, name: "Hackathon", image: hackathon },
    { id: 4, name: "Career", image: career },
    { id: 5, name: "Entertainment", image: entertainment },
    { id: 6, name: "Workshop", image: workshop },
    { id: 7, name: "Graduation", image: graduation },
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-title">
          <h2 className="section-title">Categories</h2>
        </div>
        <div className="categories-grid">
          {categories.map((category) => (
            <div
              className={`category-card ${selectedCategory === category.name ? "selected" : ""}`}
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
            >
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
