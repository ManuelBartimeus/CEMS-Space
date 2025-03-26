import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { bookings } from "../../../data/bookings"; // Import bookings array
import { useUser } from "../../../context/UserContext"; // Import useUser

const CalendarTab = () => {
  const { loggedInUser } = useUser(); // Access the logged-in user

  // Filter bookings for the logged-in user
  const userBookings = bookings.filter(
    (booking) => booking.userId === loggedInUser?.email
  );

  // Map bookings to FullCalendar event format
  const calendarEvents = userBookings.map((booking) => ({
    title: booking.title,
    start: `${booking.date}T${booking.startTime}`, // Combine date and start time
    end: `${booking.date}T${booking.endTime}`, // Combine date and end time
    location: booking.location,
  }));

  return (
    <div className="calendar-tab">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={calendarEvents} // Pass the filtered and formatted events
      />
    </div>
  );
};

export default CalendarTab;
