import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FeedbackPage from "./components/Feedback/FeedbackPage";

function App() {
  const location = useLocation();

  return (
    <div className="flex">
      {/* Hide Sidebar on mobile when on FeedbackPage */}
      {location.pathname !== "/feedback" && <Sidebar />}
      <Routes>
        <Route path="/" element={<div>Welcome to SubRadar!</div>} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}