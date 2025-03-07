import "./Testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marcus Webb",
      text: "Amazing platform to find events!",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Jacob Jones",
      text: "Best event booking experience ever.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Dianne Russell",
      text: "Found some great local events.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Guy Hawkins",
      text: "User friendly and reliable service.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What people said...</h2>
          <button className="view-all-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </button>
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
                <h3>{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

