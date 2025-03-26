// import React from "react";
// import { Card, CardContent } from "@mui/material";
// import { Button } from "@mui/material";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import PlaceIcon from "@mui/icons-material/Place";

// const events = [
//   {
//     title: "Start a blog to reach your creative peak",
//     time: "01:34 PM",
//     date: "Saturday, Jul 12",
//     location: "Syracuse, Connecticut",
//     image: "/images/event1.jpg",
//   },
//   {
//     title: "Caring is the new marketing",
//     time: "01:34 PM",
//     date: "Friday, Jun 8",
//     location: "Coppell, Virginia",
//     image: "/images/event2.jpg",
//   },
//   // Add more event objects here
// ];

// const CreationTab = () => {
//   return (
//     <div style={{ padding: "24px" }}>
//       <h2 style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", marginBottom: "24px" }}>
//         My Events
//       </h2>
//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
//         <div>
//           <span style={{ fontWeight: "500" }}>Filter By:</span>
//           <select style={{ marginLeft: "8px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}>
//             <option>Status</option>
//           </select>
//         </div>
//         <div>
//           <span style={{ fontWeight: "500", marginRight: "8px" }}>Sort By:</span>
//           <Button variant="outlined" startIcon={<CalendarTodayIcon />} style={{ marginRight: "8px" }}>
//             Date
//           </Button>
//           <Button variant="outlined" startIcon={<PlaceIcon />}>Location</Button>
//         </div>
//       </div>
//       <div>
//         {events.map((event, index) => (
//           <Card key={index} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", marginBottom: "16px" }}>
//             <img src={event.image} alt={event.title} style={{ width: "96px", height: "96px", borderRadius: "8px", objectFit: "cover" }} />
//             <CardContent style={{ flex: "1" }}>
//               <h3 style={{ fontWeight: "600", fontSize: "18px" }}>{event.title}</h3>
//               <p style={{ fontSize: "14px", color: "gray" }}>{event.time}</p>
//               <p style={{ fontSize: "14px", color: "gray" }}>{event.date}</p>
//               <p style={{ fontSize: "14px", color: "gray" }}>{event.location}</p>
//             </CardContent>
//             <Button variant="outlined">Invite</Button>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CreationTab;
