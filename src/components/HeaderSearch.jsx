import React from 'react';

export default function HeaderSearch() {
  return (
    <div className="w-full px-3.5 pt-1.5 pb-2 z-20 flex flex-col space-y-2 select-none shrink-0 pointer-events-auto">
      {/* Top row: Profile Avatar + Search Capsule */}
      <div className="flex items-center space-x-2.5">
        {/* Profile Circle Button */}
        <button 
          type="button"
          aria-label="Profil"
          className="w-12 h-12 rounded-full bg-[#1db5ac] flex items-center justify-center shadow-lg shadow-teal-950/40 shrink-0 hover:brightness-105 active:scale-95 transition-transform"
        >
          {/* Outline avatar silhouette matching the screenshot */}
          <svg className="w-6 h-6 text-white stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="7.5" r="3.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 19.5c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
          </svg>
        </button>

        {/* Search Bar Capsule */}
        <div className="flex-1 h-12 bg-[#242340]/95 backdrop-blur-md rounded-full border-[1.5px] border-[#55517e] flex items-center px-4 shadow-lg shadow-black/40 cursor-pointer hover:border-[#6d689e] transition-colors">
          {/* Magnifying glass icon */}
          <svg className="w-5 h-5 text-[#a5a3c2] shrink-0 mr-3 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.2" y2="16.2" strokeLinecap="round" />
          </svg>
          {/* Search placeholder text */}
          <span className="text-[13.5px] text-[#a5a3c2] font-normal tracking-tight truncate">
            Rechercher un arrêt, un lieu...
          </span>
        </div>
      </div>

      {/* Second row: "Itinéraire" Pill Button aligned to the right */}
      <div className="flex justify-end pr-0.5">
        <button 
          type="button"
          aria-label="Itinéraire"
          className="bg-[#ededf2] text-[#1c2242] font-semibold text-[13.5px] px-4 py-2 rounded-full flex items-center space-x-2 shadow-md shadow-black/40 hover:bg-white active:scale-95 transition-all"
        >
          {/* Custom Route / Waypoint Icon */}
          <svg className="w-4 h-4 text-[#1c2242] stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="6" cy="18" r="2.8" />
            <circle cx="18" cy="6" r="2.8" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 15.2c0-4.5 3-6.5 6-6.5s6-2 6-2.5" />
          </svg>
          <span className="font-semibold tracking-tight">Itinéraire</span>
        </button>
      </div>
    </div>
  );
}
