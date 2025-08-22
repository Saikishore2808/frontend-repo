import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Tickets from "./pages/Tickets.jsx";
import TicketDetail from "./pages/TicketDetail.jsx";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/:id" element={<TicketDetailWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to get :id param
import { useParams } from "react-router-dom";
function TicketDetailWrapper() {
  const { id } = useParams();
  return <TicketDetail ticketId={id} />;
}

export default App;
