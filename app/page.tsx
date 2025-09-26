import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DBDBDC] to-[#C8DADF] flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo-brand-dashboard.svg" 
            alt="CarePoint" 
            className="w-16 h-16 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-[#131313] mb-2">CarePoint</h1>
          <p className="text-lg text-gray-600">Healthcare Management System</p>
        </div>

        {/* Main CTA */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#131313] mb-4">
            Welcome to CarePoint Dashboard
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Access your comprehensive healthcare management dashboard with real-time statistics, patient data, and analytics.
          </p>
          
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-[#3490AA] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a7a8a] transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Access Dashboard
          </Link>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#131313] mb-1">Patient Management</h3>
            <p className="text-sm text-gray-600">Track and manage patient records</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#131313] mb-1">Analytics</h3>
            <p className="text-sm text-gray-600">Real-time insights and reports</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#131313] mb-1">Room Management</h3>
            <p className="text-sm text-gray-600">Monitor room capacity and availability</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-gray-500">
          <p>© 2024 CarePoint. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}