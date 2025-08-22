import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/tickets")
      .then(res => setTickets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="tickets-page">
      <div className="tickets-header">
        <h1>📋 My Tickets Dashboard</h1>
        <p>View, track, and manage your support tickets</p>
      </div>

      <div className="tickets-container">
        {tickets.map(ticket => (
          <div key={ticket._id} className="ticket-card">
            <h2>{ticket.title}</h2>
            <p>{ticket.description}</p>
            <span className={`ticket-status ${ticket.status.toLowerCase()}`}>
              {ticket.status}
            </span>
            <br />
            <Link to={`/tickets/${ticket._id}`} className="view-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
