import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { FiPlus, FiDownload, FiSettings, FiEye } from "react-icons/fi"; // Import icons from react-icons
import SettingsModal from "../Settings/SettingsModal"; // Import the SettingsModal component
import { useNavigate } from "react-router-dom"; // Import useNavigate

function StatCard({ title, value, subtitle, icon }) {
  return (
    <Card className="w-60 p-4 shadow-sm">
      <CardContent className="flex flex-col gap-1 text-white">
        <div className="text-sm text-purple-200">{title}</div>
        <div className="text-2xl font-semibold">{value}</div>
        {subtitle && <div className="text-sm text-green-600">{subtitle}</div>}
      </CardContent>
    </Card>
  );
}

export default function DashboardHeader() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false); // State to manage modal visibility

  const handleAddIntegrationClick = () => {
    setIsSettingsModalOpen(true); // Open the modal
  };
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
            Dashboard
          </h2>

          <p className="text-sm text-gray-500"></p>
        </div>
        <div className="flex gap-2">
          {/* Add Integration Button */}
          <button
            className="px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-700 text-sm flex items-center gap-1"
            onClick={handleAddIntegrationClick} // Open modal on click
          >
            <FiPlus className="w-4 h-4" /> Add Integration
          </button>

          {/* Export Button */}
          <button className="px-3 py-1.5 bg-white text-gray-700 rounded-md hover:bg-gray-300 text-sm flex items-center gap-1">
            <FiDownload className="w-4 h-4" /> Export
          </button>

          {/* View Feedback Button */}
          <button
            className="px-3 py-1.5 bg-white text-gray-700 rounded-md hover:bg-gray-300 text-sm flex items-center gap-1"
            onClick={() => navigate("/feedback")} // Redirect to the home page
          >
            <FiEye className="w-4 h-4" /> View Feedback
          </button>

          {/* Settings Button */}
          <button className="px-3 py-1.5 bg-white text-gray-700 rounded-md hover:bg-gray-300 text-sm flex items-center gap-1">
            <FiSettings className="w-4 h-4" /> Settings
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        <StatCard title="Total Feedback" value="245" subtitle="↑ 12%" />
        <StatCard title="Top Issue This Week" value="Pricing Plans" />
        <StatCard
          title="Sentiment Overview"
          value="42% Positive"
          subtitle="↑ 8%"
        />
        <StatCard
          title="Responses per Platform"
          value="G: 70 / Tf: 102 / SM: 73"
        />
      </div>

      {/* Settings Modal */}
      <SettingsModal
        open={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)} // Close the modal
      />
    </div>
  );
}
