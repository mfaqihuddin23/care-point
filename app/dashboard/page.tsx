import StatCard from "@/components/StatCard";
import Conferences from "@/components/Conferences";
import HealthTrends from "@/components/HealthTrends";
import DoctorsSchedule from "@/components/DoctorsSchedule";

export default function Dashboard() {
  return (
    <>
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
    </>
  );
}
