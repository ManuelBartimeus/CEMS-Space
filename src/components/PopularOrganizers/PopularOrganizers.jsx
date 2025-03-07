import "./PopularOrganizers.css"

const PopularOrganizers = () => {
  const organizers = [
    { id: 1, name: "Robert Fox", image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Annette Black", image: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "Kristin Watson", image: "/placeholder.svg?height=80&width=80" },
    { id: 4, name: "Albert Flores", image: "/placeholder.svg?height=80&width=80" },
  ]

  return (
    <section className="popular-organizers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Popular Organizers</h2>
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
        <div className="organizers-grid">
          {organizers.map((organizer) => (
            <div className="organizer-card" key={organizer.id}>
              <div className="organizer-image">
                <img src={organizer.image || "/placeholder.svg"} alt={organizer.name} />
              </div>
              <h3>{organizer.name}</h3>
              <button className="follow-button">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularOrganizers

