import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Sidebar from "./components/Sidebar"; // Import Sidebar
import FeedbackPage from "./components/Feedback/FeedbackPage";
import DashboardPage from "./components/Feedback/DashboardPage";

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="flex h-screen">
      {/* Conditionally render Sidebar */}
      {location.pathname !== "/feedback" && (
        <Sidebar /> // Sidebar is always rendered unless on /feedback
      )}
      <div className="flex-1 overflow-y-auto"> {/* Main content area */}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
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
