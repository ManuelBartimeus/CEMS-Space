import "./TrendingHashtags.css"

const TrendingHashtags = () => {
  const hashtags = [
    "Music",
    "Comedy",
    "Theatre",
    "Food",
    "Culture",
    "Sports",
    "Wellness",
    "Dance",
    "Festival",
    "Concert",
    "Workshop",
    "Conference",
    "Exhibition",
    "Party",
  ]

  return (
    <section className="trending-hashtags">
      <div className="container">
        <div className="hashtags-container">
          {hashtags.map((tag, index) => (
            <button key={index} className="hashtag-pill">
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingHashtags

