// pages/DashboardPage.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import FeedbackOverview from "./FeedbackOverview";
import Timeline from "../Dashboard/Timeline";
import InsightsPanel from "../Dashboard/InsightsPanel";
import SavedCollections from "../Dashboard/SavedCollections";
import NextSteps from "../Dashboard/NextSteps";
import SentimentCharts from "../Dashboard/SentimentCharts";

function Navbar() {
  return (
    <nav className="bg-transparent text-white p-5 h-auto w-340">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">SubRadar</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="hover:text-blue-400 transition">
              Feedback
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default function DashboardPage() {
  return (
    <div
      className="min-h-screen flex flex-col justify-start items-start overflow-x-hidden w-338 "
      style={{ backgroundColor: "#09090B" }}
    >
      <Navbar />
      <div className="flex mt-4 h-auto w-330">
        <div className="MainDiv flex flex-col gap-6 h-auto ml-7">
          <FeedbackOverview />
          <Timeline />
          <SentimentCharts />
        </div>
        <div className="ml-6">
          <InsightsPanel />
        </div>
      </div>
      <div className="flex gap-6 ml-7 mt-5 h-120 mb-10 w-326">
        <SavedCollections/>
        <NextSteps />
      </div>
    </div>
  );
}
