import EventCard from "../EventCard/EventCard"
import "./EventSection.css"

const EventSection = ({ title, events, showMore = false }) => {
  return (
    <section className="event-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="events-grid">{events && events.map((event) => <EventCard key={event.id} event={event} />)}</div>
        {showMore && <div className="see-more">See More</div>}
      </div>
    </section>
  )
}

export default EventSection

