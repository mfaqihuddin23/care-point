export default function HealthTrends() {
  const healthData = [
    { disease: "COVID-19", characteristic: "Respiratory", patients: 45, recovers: 38 },
    { disease: "Diabetes", characteristic: "Chronic", patients: 32, recovers: 28 },
    { disease: "Hypertension", characteristic: "Cardiovascular", patients: 28, recovers: 25 },
    { disease: "Pneumonia", characteristic: "Respiratory", patients: 22, recovers: 19 },
    { disease: "Gastritis", characteristic: "Digestive", patients: 18, recovers: 16 }
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-soft border border-slate-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-slate-700">Health Trends</h3>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <select className="text-xs text-slate-500 bg-transparent border-none outline-none">
            <option>Des 24</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-2 text-slate-600 font-medium">Disease</th>
              <th className="text-left py-2 text-slate-600 font-medium">Characteristic</th>
              <th className="text-left py-2 text-slate-600 font-medium">Patients</th>
              <th className="text-left py-2 text-slate-600 font-medium">Recovers</th>
            </tr>
          </thead>
          <tbody>
            {healthData.map((item, index) => (
              <tr key={index} className="border-b border-slate-50">
                <td className="py-2 text-slate-700 font-medium">{item.disease}</td>
                <td className="py-2 text-slate-600">{item.characteristic}</td>
                <td className="py-2 text-slate-700">{item.patients}</td>
                <td className="py-2 text-slate-700">{item.recovers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
