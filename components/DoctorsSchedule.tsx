export default function DoctorsSchedule() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDay = 'Wed';

  return (
    <div className="bg-white rounded-lg p-4 shadow-soft border border-slate-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-slate-700">Doctor's Schedule</h3>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <select className="text-xs text-slate-500 bg-transparent border-none outline-none">
            <option>Des 24</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div
            key={day}
            className={`text-center py-2 px-1 rounded-md text-xs font-medium ${
              day === currentDay
                ? 'bg-accent text-white'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <div className="text-xs text-slate-600">
          <div className="flex justify-between items-center py-1">
            <span>Dr. Smith - Cardiology</span>
            <span className="text-slate-500">09:00 - 17:00</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span>Dr. Johnson - Neurology</span>
            <span className="text-slate-500">08:00 - 16:00</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span>Dr. Williams - Pediatrics</span>
            <span className="text-slate-500">10:00 - 18:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
