import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TicketDetail({ ticketId }) {
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/api/tickets/${ticketId}`);
        setTicket(data);
      } catch (error) {
        console.error("Error fetching ticket:", error);
      }
    };
    fetchTicket();
  }, [ticketId]);

  if (!ticket) return <p>Loading...</p>;

  return (
    <div className="ticket-details">
      <h2 className="ticket-title">{ticket.title}</h2>
      <p className="ticket-desc">{ticket.description}</p>

      <p>
        <strong>Status:</strong>{" "}
        <span className={`ticket-status ${ticket.status}`}>
          {ticket.status}
        </span>
      </p>

      <p className="ai-feedback">
        <strong>AI Feedback:</strong>{" "}
        {ticket.feedback || "No feedback yet"}
      </p>
    </div>
  );
}
