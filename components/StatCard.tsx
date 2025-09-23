interface StatCardProps {
  title: string;
  adultPatients?: number;
  kidsPatients?: number;
  emergencyRoom?: number;
  polyclinic?: number;
  bedAvailable?: number;
  occupiedBed?: number;
  period: string;
}

export default function StatCard({
  title,
  adultPatients,
  kidsPatients,
  emergencyRoom,
  polyclinic,
  bedAvailable,
  occupiedBed,
  period
}: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-soft border border-slate-100 relative">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-medium text-slate-700">{title}</h3>
        <div className="flex items-center gap-2">
          <select className="text-xs text-slate-500 bg-transparent border-none outline-none">
            <option>{period}</option>
          </select>
          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        {adultPatients !== undefined && kidsPatients !== undefined && (
          <>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-600">Adult Patients</span>
              <span className="text-sm font-semibold text-ink">{adultPatients}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-600">Kids Patients</span>
              <span className="text-sm font-semibold text-ink">{kidsPatients}</span>
            </div>
          </>
        )}
        
        {emergencyRoom !== undefined && polyclinic !== undefined && (
          <>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-600">Emergency Room</span>
              <span className="text-sm font-semibold text-ink">{emergencyRoom}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-600">Polyclinic</span>
              <span className="text-sm font-semibold text-ink">{polyclinic}</span>
            </div>
          </>
        )}
        
        {bedAvailable !== undefined && occupiedBed !== undefined && (
          <>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-600">Bed Available</span>
              <span className="text-sm font-semibold text-ink">{bedAvailable}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-600">Occupied Bed</span>
              <span className="text-sm font-semibold text-ink">{occupiedBed}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
