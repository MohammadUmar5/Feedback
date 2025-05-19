import { Link } from "react-router-dom";
import { Home, Search, Bookmark, Settings, BarChart } from "lucide-react";
import "../styles/sidebar.css";
import { useState } from "react";
import SettingsModal from "./Settings/SettingsModal";

function Sidebar() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsSettingsModalOpen(true);
  };

  return (
    <aside
      className="h-screen w-55 py-6 flex-col justify-between sidebar sm:block hidden" // Sidebar is hidden by default on mobile
      style={{ backgroundColor: "rgb(14,14,17)" }}
    >
      <div className="px-4">
        <h1 className="text-2xl font-bold mb-8">SubRadar</h1>
        <nav className="space-y-4">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" to="/" />
          <SidebarItem
            icon={<Search size={18} />}
            label="Feedback"
            to="/feedback"
          />
          <SidebarItem icon={<BarChart size={18} />} label="Analytics" />
          <SidebarItem icon={<Bookmark size={18} />} label="Saved" />
        </nav>
      </div>
      <hr className="seperator border-t mr-100 mt-5 w-55" />

      <div className="px-4 mt-45">
        <SidebarItem
          icon={<Settings size={18} />}
          label="Settings"
          onClick={handleSettingsClick}
        />
        <div className="mt-10 ml-3 text-sm text-gray-400">v1.0</div>
      </div>
      <SettingsModal
        open={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
      />
    </aside>
  );
}

function SidebarItem({ icon, label, to, onClick }) {
  return to ? (
    <Link
      to={to}
      className="sidebaritems flex items-center space-x-3 hover:text-white cursor-pointer transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  ) : (
    <div
      className="sidebaritems flex items-center space-x-3 hover:text-white cursor-pointer transition"
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

export default Sidebar;
