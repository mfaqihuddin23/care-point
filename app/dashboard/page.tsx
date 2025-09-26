import StatCard from "@/components/StatCard";
import Conferences from "@/components/Conferences";
import HealthTrends from "@/components/HealthTrends";
import DoctorsSchedule from "@/components/DoctorsSchedule";
import { StatCardProvider } from "@/components/StatCardContext";

export default function Dashboard() {
  return (
    <StatCardProvider>
      {/* Dashboard Content Grid - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col gap-8 px-6 pt-8 pb-6 bg-gradient-to-b from-[#E4E8EB] to-[#DDE4E6] rounded-[34px]">
            <span className="font-jakarta font-semibold text-lg text-[#131313] mb-6">Statistical Summary</span>

            {/* Statistics Cards - 3 cards in a row */}
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
          </div>

          <div className="flex gap-5 items-stretch">
            {/* Health Trends */}
            <HealthTrends />

            {/* Doctor's Schedule */}
            <DoctorsSchedule />
          </div>
        </div>

        {/* Right Column - Doctor's Conference Aside */}
        <div className="lg:col-span-1 flex">
          <Conferences />
        </div>
      </div>
    </StatCardProvider>
  );
}
