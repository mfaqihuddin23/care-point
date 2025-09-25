"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNavbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/patient", label: "Patient" },
    { href: "/doctors", label: "Doctors and Staff" },
    { href: "/room", label: "Room" },
    { href: "/medicine", label: "Medicine" },
    { href: "/analytics", label: "Analitik" },
    { href: "/inventory", label: "Inventory" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="relative w-[31px]">
            <img src="/logo-brand-dashboard.svg" alt="" />
          </div>
          
          {/* Navigation Tabs */}
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-black border-b-2 border-black pb-2"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side icons and user profile */}
        <div className="flex items-center space-x-4">
          {/* Messages Icon */}
          <button className="p-2 text-gray-600 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>

          {/* Notifications Icon */}
          <button className="p-2 text-gray-600 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4.828 17l2.586-2.586a2 2 0 012.828 0L12.828 17H4.828z" />
            </svg>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              K
            </div>
            <span className="text-sm font-medium text-gray-900">Admin Karlina Safir</span>
          </div>
        </div>
      </div>
    </header>
  );
}

