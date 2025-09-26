"use client";
import { useState, useEffect, useRef } from "react";
import { useStatCard } from "./StatCardContext";

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

interface CategoryData {
  day: number;
  week: number;
  month: number;
  year: number;
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
  const [selectedPeriod, setSelectedPeriod] = useState(period);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { expandedCategory, setExpandedCategory } = useStatCard();

  // Close dropdown and popups when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      
      // Close expanded category when clicking outside
      if (expandedCategory) {
        const target = event.target as Element;
        const isInsideCard = target.closest('.bg-gray-100');
        if (!isInsideCard) {
          setExpandedCategory(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedCategory]);

  // Sample data for different periods - in real app this would come from props or API
  const getCategoryData = (category: string): CategoryData => {
    const baseData = {
      adult: { day: 25, week: 547, month: 2100, year: 25000 },
      kids: { day: 15, week: 372, month: 1400, year: 16800 },
      emergency: { day: 3, week: 78, month: 300, year: 3600 },
      polyclinic: { day: 8, week: 243, month: 900, year: 10800 },
      bedAvailable: { day: 2, week: 12, month: 45, year: 540 },
      occupiedBed: { day: 5, week: 188, month: 720, year: 8640 }
    };
    
    return baseData[category as keyof typeof baseData] || { day: 0, week: 0, month: 0, year: 0 };
  };

  const getCurrentValue = (category: string, period: string): number => {
    const data = getCategoryData(category);
    switch (period) {
      case 'Day': return data.day;
      case 'Week': return data.week;
      case 'Month': return data.month;
      case 'Year': return data.year;
      default: return data.week;
    }
  };

  const periods = ['Day', 'Week', 'Month', 'Year'];

  const toggleCategoryExpansion = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-sm border border-gray-200 relative">
      {/* Header with title and action button */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-jakarta font-semibold text-[#131313]">{title}</h3>
        {/* Top-right action button */}
        <button className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </button>
      </div>

      {/* Period selector below title */}
      <div className="mb-4">
        <div className="relative inline-block" ref={dropdownRef}>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-xs text-gray-500 bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            {selectedPeriod}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[80px]">
              {periods.map((periodOption) => (
                <button
                  key={periodOption}
                  onClick={() => {
                    setSelectedPeriod(periodOption);
                    setShowDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-100 transition-colors ${
                    selectedPeriod === periodOption ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {periodOption}
                </button>
              ))}
          </div>
          )}
        </div>
      </div>
      
      {/* Patient categories */}
      <div className="space-y-3 font-jakarta">
        {adultPatients !== undefined && kidsPatients !== undefined && (
          <>
            {/* Adult Patients Section */}
            <div className="bg-white rounded-md p-3 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-600">Adult Patients</span>
                <button 
                  onClick={() => toggleCategoryExpansion('adult')}
                  className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <svg className="w-2 h-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-900">{getCurrentValue('adult', selectedPeriod)}</span>
              </div>
              
              {/* Popup for Adult Patients */}
              {expandedCategory === 'adult' && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4 min-w-[200px]">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">Adult Patients Details</h4>
                    <button 
                      onClick={() => toggleCategoryExpansion('adult')}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Day:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('adult').day}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Week:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('adult').week}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Month:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('adult').month}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Year:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('adult').year}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Kids Patients Section */}
            <div className="bg-white rounded-md p-3 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-600">Kids Patients</span>
                <button 
                  onClick={() => toggleCategoryExpansion('kids')}
                  className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <svg className="w-2 h-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-900">{getCurrentValue('kids', selectedPeriod)}</span>
              </div>
              
              {/* Popup for Kids Patients */}
              {expandedCategory === 'kids' && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4 min-w-[200px]">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">Kids Patients Details</h4>
                    <button 
                      onClick={() => toggleCategoryExpansion('kids')}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Day:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('kids').day}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Week:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('kids').week}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Month:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('kids').month}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Year:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('kids').year}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        
        {emergencyRoom !== undefined && polyclinic !== undefined && (
          <>
            <div className="bg-white rounded-md p-3 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-600">Emergency Room</span>
                <button 
                  onClick={() => toggleCategoryExpansion('emergency')}
                  className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <svg className="w-2 h-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-900">{getCurrentValue('emergency', selectedPeriod)}</span>
              </div>
              
              {/* Popup for Emergency Room */}
              {expandedCategory === 'emergency' && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4 min-w-[200px]">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">Emergency Room Details</h4>
                    <button 
                      onClick={() => toggleCategoryExpansion('emergency')}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Day:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('emergency').day}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Week:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('emergency').week}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Month:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('emergency').month}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Year:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('emergency').year}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white rounded-md p-3 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-600">Polyclinic</span>
                <button 
                  onClick={() => toggleCategoryExpansion('polyclinic')}
                  className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <svg className="w-2 h-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-900">{getCurrentValue('polyclinic', selectedPeriod)}</span>
              </div>
              
              {/* Popup for Polyclinic */}
              {expandedCategory === 'polyclinic' && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4 min-w-[200px]">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">Polyclinic Details</h4>
                    <button 
                      onClick={() => toggleCategoryExpansion('polyclinic')}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Day:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('polyclinic').day}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Week:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('polyclinic').week}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Month:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('polyclinic').month}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Year:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('polyclinic').year}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        
        {bedAvailable !== undefined && occupiedBed !== undefined && (
          <>
            <div className="bg-white rounded-md p-3 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-600">Bed Available</span>
                <button 
                  onClick={() => toggleCategoryExpansion('bedAvailable')}
                  className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <svg className="w-2 h-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-900">{getCurrentValue('bedAvailable', selectedPeriod)}</span>
              </div>
              
              {/* Popup for Bed Available */}
              {expandedCategory === 'bedAvailable' && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4 min-w-[200px]">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">Bed Available Details</h4>
                    <button 
                      onClick={() => toggleCategoryExpansion('bedAvailable')}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Day:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('bedAvailable').day}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Week:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('bedAvailable').week}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Month:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('bedAvailable').month}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Year:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('bedAvailable').year}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white rounded-md p-3 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-600">Occupied Bed</span>
                <button 
                  onClick={() => toggleCategoryExpansion('occupiedBed')}
                  className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <svg className="w-2 h-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-900">{getCurrentValue('occupiedBed', selectedPeriod)}</span>
              </div>
              
              {/* Popup for Occupied Bed */}
              {expandedCategory === 'occupiedBed' && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4 min-w-[200px]">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-semibold text-gray-900">Occupied Bed Details</h4>
                    <button 
                      onClick={() => toggleCategoryExpansion('occupiedBed')}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Day:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('occupiedBed').day}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Week:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('occupiedBed').week}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Month:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('occupiedBed').month}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Year:</span>
                      <span className="font-medium text-[#131313]">{getCategoryData('occupiedBed').year}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
