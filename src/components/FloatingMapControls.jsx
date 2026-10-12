import React from 'react';
import { SlidersHorizontal, LocateFixed } from 'lucide-react';

export default function FloatingMapControls() {
  return (
    <div className="absolute right-3.5 bottom-[95px] z-20 flex flex-col space-y-3 pointer-events-auto">
      {/* Settings / Filters Button */}
      <button
        type="button"
        aria-label="Filtres et réglages"
        className="w-12 h-12 rounded-full bg-[#262846]/90 backdrop-blur-md border border-[#404368]/70 flex items-center justify-center text-white/90 shadow-lg shadow-black/40 hover:bg-[#303356] active:scale-95 transition-all"
      >
        {/* Equalizer / Sliders Icon */}
        <svg className="w-5 h-5 text-white stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
          <circle cx="8" cy="7" r="2" fill="#262846" strokeWidth="1.8" />
          <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
          <circle cx="16" cy="12" r="2" fill="#262846" strokeWidth="1.8" />
          <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
          <circle cx="11" cy="17" r="2" fill="#262846" strokeWidth="1.8" />
        </svg>
      </button>

      {/* Crosshair / Geolocation Target Button */}
      <button
        type="button"
        aria-label="Me localiser"
        className="w-12 h-12 rounded-full bg-[#262846]/90 backdrop-blur-md border border-[#404368]/70 flex items-center justify-center text-white/90 shadow-lg shadow-black/40 hover:bg-[#303356] active:scale-95 transition-all"
      >
        <LocateFixed className="w-5 h-5 text-white stroke-[2]" />
      </button>
    </div>
  );
}

