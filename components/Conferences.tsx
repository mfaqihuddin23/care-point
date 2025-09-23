export default function Conferences() {
  const conferences = [
    {
      id: 1,
      title: "Bypass surgery meeting to start soon. remind doctor",
      time: "Tue, 15 Jan 09:00 am",
      type: "Heart bypass surgery conference",
      attendees: 3,
      urgent: true
    },
    {
      id: 2,
      title: "Conference to respond to rising covid 19 cases",
      time: "Tue, 15 Jan 16:00 pm",
      type: "Emergency response meeting",
      attendees: 3,
      urgent: false
    },
    {
      id: 3,
      title: "Spinal surgery of patient named fulan",
      time: "Wed, 16 Jan 10:00 am",
      type: "Surgical planning conference",
      attendees: 3,
      urgent: false
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-soft border border-slate-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-slate-700">Doctor's Conference</h3>
        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        {conferences.map((conference) => (
          <div key={conference.id} className="border border-slate-100 rounded-lg p-3">
            {conference.urgent && (
              <div className="flex items-center gap-2 mb-2 p-2 bg-red-50 border border-red-200 rounded-md">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-xs text-red-700 font-medium">{conference.title}</span>
                <button className="ml-auto text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors">
                  Remind
                </button>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-slate-500">{conference.time}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: conference.attendees }).map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-slate-300 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-600">{conference.type}</p>
              </div>
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
