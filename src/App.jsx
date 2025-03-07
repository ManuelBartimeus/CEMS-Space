"use client"

import { useState } from "react"
import Header from "./components/Header/Header"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import Categories from "./components/Categories/Categories"
import EventSection from "./components/EventSection/EventSection"
import TrendingHashtags from "./components/TrendingHashtags/TrendingHashtags"
import PopularOrganizers from "./components/PopularOrganizers/PopularOrganizers"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
import InterestModal from "./components/InterestModal/InterestModal"
import "./App.css"

function App() {
  const [showInterestModal, setShowInterestModal] = useState(false)

  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <Categories />
        <EventSection title="Browse events on CHRIST" events={christEvents} />
        <EventSection title="Based on your interests" events={interestBasedEvents} />
        <TrendingHashtags />
        <EventSection title="Trending #hashtags" events={trendingEvents} showMore={true} />
        <EventSection title="More Events" events={moreEvents} showMore={true} />
        <PopularOrganizers />
        <Testimonials />
      </main>
      <Footer />
      {showInterestModal && <InterestModal onClose={() => setShowInterestModal(false)} />}
    </div>
  )
}

// Sample data
const christEvents = [
  // Event data will go here
]

const interestBasedEvents = [
  {
    id: 1,
    title: "Midnight Memories",
    date: "Oct 15",
    location: "Chennai",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4,
    bookmarked: false,
  },
  {
    id: 2,
    title: "Coding Workshop",
    date: "Oct 18",
    location: "Bangalore",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5,
    bookmarked: true,
  },
  {
    id: 3,
    title: "Music DJ Night",
    date: "Oct 20",
    location: "Hyderabad",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4,
    bookmarked: false,
  },
  {
    id: 4,
    title: "Food and Wine Festival",
    date: "Oct 22",
    location: "Mumbai",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5,
    bookmarked: true,
  },
  {
    id: 5,
    title: "Indie music / Dance",
    date: "Oct 25",
    location: "Delhi",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4,
    bookmarked: false,
  },
  {
    id: 6,
    title: "Art Exhibition",
    date: "Oct 28",
    location: "Kolkata",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5,
    bookmarked: true,
  },
  {
    id: 7,
    title: "Comedy Night",
    date: "Oct 30",
    location: "Pune",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4,
    bookmarked: false,
  },
  {
    id: 8,
    title: "Tech Summit 2023",
    date: "Nov 2",
    location: "Goa",
    image: "/placeholder.svg?height=200&width=300",
    rating: 5,
    bookmarked: true,
  },
]

const trendingEvents = [
  // Similar structure as interestBasedEvents
]

const moreEvents = [
  // Similar structure as interestBasedEvents
]

export default App

