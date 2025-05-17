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
    <aside className="h-screen w-55 px-4 py-6 flex flex-col justify-between sidebar">
      <div>
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
          <hr className="seperator border-t my-4" />
        </nav>
      </div>
      <div>
        <SidebarItem
          icon={<Settings size={18} />}
          label="Settings"
          onClick={handleSettingsClick}
        />
        <div className="mt-10 text-sm text-gray-400">v1.0</div>
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