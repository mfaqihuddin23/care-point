import Sidebar from "@/components/Sidebar";
import DashboardNavbar from "@/components/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex" style={{
      background: 'linear-gradient(to bottom, #DBDBDC, #C8DADF)'
    }}>
      {/* Sidebar - Full Height */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Dashboard Navbar - Aligned with content */}
        <DashboardNavbar />

        {/* Content */}
        <div className="flex-1 flex items-stretch p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
