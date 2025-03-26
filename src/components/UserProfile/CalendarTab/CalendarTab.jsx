import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarTab = () => {
  const events = [
    { title: "Event Name", start: "2025-03-12T02:00:00", location: "Location" },
    { title: "Event Name", start: "2025-03-17T05:00:00", location: "Online" },
    { title: "Event Name", start: "2025-03-18T07:00:00", location: "Location" },
    { title: "Event Name", start: "2025-03-11T09:00:00", location: "Online" },
    { title: "Event Name", start: "2025-03-04T13:00:00", location: "Location" },
  ];

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
        events={events}
      />
    </div>
  );
};

export default CalendarTab;
