import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import Conferences from "@/components/Conferences";
import HealthTrends from "@/components/HealthTrends";
import DoctorsSchedule from "@/components/DoctorsSchedule";
import Link from "next/link";

/**
 * Landing Page
 * - Berisi hero + section: Product, Service, Activity, Support.
 * - Setiap section punya id agar bisa discroll pakai anchor link (#product, dst).
 */
export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-custom">
      <Navbar />
      
      {/* Hero section */}
      <section className="px-8 pt-[77px] text-center">
        <div className="container flex flex-col items-center gap-[30px]">
          <h1 className="text-4xl md:text-6xl font-bold font-satoshi text-[#121212] leading-tight max-w-[940px]">
            Transform <span className="text-[#3490AA]">Healthcare</span> Efficiency
            with Cutting-Edge Technology
          </h1>
          <p className="font-medium text-base text-slate-600 leading-[140%]">
            Manage patients, staff, finances, and more with our comprehensive, user-friendly system.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/auth"
            className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-white font-medium hover:bg-slate-800 transition-colors"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <button className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-ink font-medium hover:bg-slate-50 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Watch a Demo
          </button>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Browser Window Container */}
          <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white rounded-md px-4 py-1 text-sm text-slate-600 flex items-center gap-2 max-w-md w-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  https://www.rsstklaten.com/
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828z" />
                </svg>
                <div className="flex items-center gap-2 ml-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    K
                  </div>
                  <span className="text-sm text-slate-700">Admin Karlina Safir</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex">
              <div className="w-16 bg-slate-50 border-r flex flex-col items-center py-4 gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                {/* Navigation Tabs */}
                <div className="flex gap-1 mb-6 border-b">
                  <button className="px-4 py-2 text-sm font-medium text-ink border-b-2 border-ink">Dashboard</button>
                  <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink">Patient</button>
                  <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink">Doctors and Staff</button>
                  <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink">Room</button>
                  <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink">Medicine</button>
                  <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink">Analitik</button>
                  <button className="px-4 py-2 text-sm text-slate-600 hover:text-ink">Inventory</button>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product section */}
      <section id="product" className="rounded-[32px] bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold">Product</h2>
        <p className="mt-2 text-slate-600">Our platform modules and features.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 bg-mist p-5">Electronic Medical Record</div>
          <div className="rounded-xl2 bg-mist p-5">Scheduling</div>
          <div className="rounded-xl2 bg-mist p-5">Analytics</div>
        </div>
      </section>

      {/* Service section */}
      <section id="service" className="rounded-[32px] bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold">Service</h2>
        <p className="mt-2 text-slate-600">Implementation, training, and support plans.</p>
        <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
          <li>Onboarding & data migration</li>
          <li>Customization & branding</li>
          <li>Staff training</li>
        </ul>
      </section>

      {/* Activity section */}
      <section id="activity" className="rounded-[32px] bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold">Activity</h2>
        <p className="mt-2 text-slate-600">Recent updates and changelog.</p>
        <div className="mt-4 space-y-3">
          <div className="rounded-xl2 bg-mist p-4">v0.2 – Dashboard improvements</div>
          <div className="rounded-xl2 bg-mist p-4">v0.1 – Initial release</div>
        </div>
      </section>

      {/* Support section */}
      <section id="support" className="rounded-[32px] bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold">Support</h2>
        <p className="mt-2 text-slate-600">Contact us form.</p>
        <form className="mt-4 grid gap-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg border px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border px-4 py-2"
          />
          <textarea
            placeholder="Message"
            className="rounded-lg border px-4 py-2"
            rows={4}
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-5 py-2 text-sm text-white"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
