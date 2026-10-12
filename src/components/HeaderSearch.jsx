import React from 'react';
import { Search } from 'lucide-react';

export default function HeaderSearch() {
  return (
    <div className="w-full px-3.5 pt-1 pb-2 z-20 flex flex-col space-y-2 pointer-events-auto">
      {/* Top row: Profile Avatar + Search Bar */}
      <div className="flex items-center space-x-2.5">
        {/* Profile Circle Button */}
        <button 
          type="button"
          aria-label="Profil"
          className="w-12 h-12 rounded-full bg-[#1ebbb0] flex items-center justify-center shadow-lg shadow-teal-900/30 shrink-0 hover:brightness-105 active:scale-95 transition-all"
        >
          <svg className="w-6 h-6 text-white stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </button>

        {/* Search Bar Capsule */}
        <div className="flex-1 h-12 bg-[#222443]/90 backdrop-blur-md rounded-full border border-[#4b4d75]/80 flex items-center px-4 shadow-lg shadow-black/40">
          <Search className="w-5 h-5 text-[#9d9bb7] shrink-0 mr-2.5 stroke-[2]" />
          <input
            type="text"
            readOnly
            placeholder="Rechercher un arrêt, un lieu..."
            className="w-full bg-transparent text-sm text-white placeholder-[#9d9bb7] font-normal focus:outline-none cursor-default"
          />
        </div>
      </div>

      {/* Second row: Floating "Itinéraire" Button aligned to the right */}
      <div className="flex justify-end pr-1">
        <button 
          type="button"
          className="bg-[#f0f1f5] text-[#1c2242] font-semibold text-[13.5px] px-4 py-2 rounded-full flex items-center space-x-2 shadow-md shadow-black/30 hover:bg-white active:scale-95 transition-all"
        >
          {/* Custom Route / Itinerary Icon */}
          <svg className="w-4 h-4 text-[#1c2242] stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="6" r="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 15c0-4.5 3-6.5 6-6.5s6-2 6-2.5" />
          </svg>
          <span>Itinéraire</span>
        </button>
      </div>
    </div>
  );
}

