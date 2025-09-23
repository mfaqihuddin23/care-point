import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import Conferences from "@/components/Conferences";
import HealthTrends from "@/components/HealthTrends";
import DoctorsSchedule from "@/components/DoctorsSchedule";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
    return (
    <div className="min-h-screen bg-gradient-custom">

    <div className="flex">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1 p-6">
        {/* Page Header */}
        <div className="mb-8">
        <h1 className="text-3xl font-bold text-ink mb-2">Dashboard</h1>
        <p className="text-slate-600">Welcome back! Here's what's happening at your healthcare facility today.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-6 border-b">
        <button className="px-4 py-2 text-sm font-medium text-ink border-b-2 border-ink">Dashboard</button>
        <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink transition-colors">Patient</button>
        <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink transition-colors">Doctors and Staff</button>
        <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink transition-colors">Room</button>
        <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink transition-colors">Medicine</button>
        <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink transition-colors">Analitik</button>
        <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink transition-colors">Inventory</button>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard 
                title="Number of patients"
                adultPatients={547}
                kidsPatients={372}
                period="Week"
            />
            <StatCard 
                title="Daily Visit"
                emergencyRoom={78}
                polyclinic={243}
                period="Week"
            />
            <StatCard 
                title="Room Capacity"
                bedAvailable={12}
                occupiedBed={188}
                period="Cendana"
            />
            </div>

            {/* Health Trends */}
            <HealthTrends />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
            {/* Doctor's Conference */}
            <Conferences />

            {/* Doctor's Schedule */}
            <DoctorsSchedule />
        </div>
        </div>

        {/* Additional Dashboard Sections */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg p-6 shadow-soft border border-slate-100">
            <h3 className="text-lg font-semibold text-ink mb-4">Recent Activities</h3>
            <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                <p className="text-sm font-medium text-ink">New patient registered</p>
                <p className="text-xs text-slate-500">2 minutes ago</p>
                </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                <p className="text-sm font-medium text-ink">Doctor appointment completed</p>
                <p className="text-xs text-slate-500">15 minutes ago</p>
                </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                <p className="text-sm font-medium text-ink">Medicine restocked</p>
                <p className="text-xs text-slate-500">1 hour ago</p>
                </div>
            </div>
            </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-soft border border-slate-100">
            <h3 className="text-lg font-semibold text-ink mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
            <button className="p-3 bg-accent text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                Add Patient
            </button>
            <button className="p-3 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                Schedule
            </button>
            <button className="p-3 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors">
                Reports
            </button>
            <button className="p-3 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                Inventory
            </button>
            </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-lg p-6 shadow-soft border border-slate-100">
            <h3 className="text-lg font-semibold text-ink mb-4">System Status</h3>
            <div className="space-y-3">
            <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Server Status</span>
                <span className="text-sm font-medium text-green-600">Online</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Database</span>
                <span className="text-sm font-medium text-green-600">Connected</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Backup Status</span>
                <span className="text-sm font-medium text-green-600">Up to date</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Active Users</span>
                <span className="text-sm font-medium text-ink">24</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    );
}
