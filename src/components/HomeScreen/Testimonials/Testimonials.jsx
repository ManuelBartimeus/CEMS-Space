import "./Testimonials.css";
import user1 from "../../../assets/users/user1.jpeg";
import user2 from "../../../assets/users/user2.jpeg";
import user3 from "../../../assets/users/user3.jpeg";
import user4 from "../../../assets/users/user4.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emmanuel Owusu",
      text: "Amazing platform to find events!",
      image: user1,
    },
    {
      id: 2,
      name: "Bernard Aryee",
      text: "Best event booking experience ever.",
      image: user2,
    },
    {
      id: 3,
      name: "Priscilla Quaye",
      text: "Found some great local events.",
      image: user3,
    },
    {
      id: 4,
      name: "Edgar Achana",
      text: "User friendly and reliable service.",
      image: user4,
    },
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What people said...</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                </div>
                <h3 >{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

