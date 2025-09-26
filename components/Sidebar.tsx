"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { href: "/dashboard", label: "Back", icon: "back" },
    { href: "/dashboard/patient", label: "Patient", icon: "patients" },
    { href: "/dashboard/doctors", label: "Doctors", icon: "doctors" },
    { href: "/dashboard/room", label: "Room", icon: "rooms" },
    { href: "/dashboard/medicine", label: "Medicine", icon: "medicine" },
    { href: "/dashboard/analytics", label: "Analytics", icon: "analytics" },
    { href: "/dashboard/inventory", label: "Inventory", icon: "inventory" },
    { href: "/dashboard/settings", label: "Settings", icon: "settings" },
  ];

  const getIcon = (iconName: string) => {
    const iconClass = "w-5 h-5";
    
    switch (iconName) {
      case "back":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isCollapsed ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
          </svg>
        );
      case "patients":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        );
      case "doctors":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case "rooms":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case "medicine":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case "analytics":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case "inventory":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case "settings":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        );
    }
  };

  return (
    <div className={`${isCollapsed ? 'w-24' : 'w-48'} flex flex-col py-6 h-screen transition-[width] duration-300`}>
      {/* Logo */}
      <div className="px-3 mb-6">
        <div className="flex items-center">
          {/* Fixed icon container - prevents shifting */}
          <div className="w-8 h-8 flex-shrink-0">
            <img src="/logo-brand-dashboard.svg" alt="CarePoint" className="w-8 h-8" />
          </div>
          {/* Text label with opacity and max-width animation */}
          <span 
            className={`ml-3 text-lg font-bold text-gray-800 transition-[opacity,max-width] duration-300 overflow-hidden whitespace-nowrap ${
              isCollapsed 
                ? 'opacity-0 max-w-0' 
                : 'opacity-100 max-w-32'
            }`}
          >
            CarePoint
          </span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col space-y-4 px-3 flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const isBackButton = item.icon === "back";
          
          if (isBackButton) {
            return (
              <div key={item.href} className="flex items-center">
                {/* Fixed button container - prevents shifting */}
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-colors border-2 bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-700 flex-shrink-0"
                  title={isCollapsed ? "Show Sidebar" : "Hide Sidebar"}
                >
                  {getIcon(item.icon)}
                </button>
                {/* Text label with opacity and max-width animation */}
                <span 
                  className={`ml-3 text-sm font-medium text-gray-700 transition-[opacity,max-width] duration-300 overflow-hidden whitespace-nowrap ${
                    isCollapsed 
                      ? 'opacity-0 max-w-0' 
                      : 'opacity-100 max-w-24'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          }
          
          return (
            <div key={item.href} className="flex items-center">
              {/* Fixed button container - prevents shifting */}
              <Link
                href={item.href}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors border-2 flex-shrink-0 ${
                  isActive
                    ? "bg-white border-gray-300 text-gray-700"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-700"
                }`}
                title={item.label}
              >
                {getIcon(item.icon)}
              </Link>
              {/* Text label with opacity and max-width animation */}
              <span 
                className={`ml-3 text-sm font-medium text-gray-700 transition-[opacity,max-width] duration-300 overflow-hidden whitespace-nowrap ${
                  isCollapsed 
                    ? 'opacity-0 max-w-0' 
                    : 'opacity-100 max-w-24'
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto px-3">
        <div className="flex items-center">
          {/* Fixed button container - prevents shifting */}
          <button className="w-12 h-12 rounded-full flex items-center justify-center transition-colors border-2 bg-white border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-700 flex-shrink-0" title="Logout">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
          {/* Text label with opacity and max-width animation */}
          <span 
            className={`ml-3 text-sm font-medium text-gray-700 transition-[opacity,max-width] duration-300 overflow-hidden whitespace-nowrap ${
              isCollapsed 
                ? 'opacity-0 max-w-0' 
                : 'opacity-100 max-w-24'
            }`}
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}
