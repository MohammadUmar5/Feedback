import DashboardHeader from "@/components/ui/DashboardHeader";
import TopInsights from "../Fsidebar/TopInsights";

function DashboardPage() {
return (
    <div className="p-6 space-y-6 ml-54 h-auto" style={{ backgroundColor: "#09090B" }}> {/* Content area */}
        <DashboardHeader />
        <TopInsights />
    </div>
);
}

export default DashboardPage;