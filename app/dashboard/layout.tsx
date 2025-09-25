import Sidebar from "@/components/Sidebar";
import DashboardNavbar from "@/components/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Navbar - Full Width */}
      <DashboardNavbar />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Dashboard Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
