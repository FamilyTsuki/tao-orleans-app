import React from 'react';

export default function FloatingMapControls() {
  return (
    <div className="absolute right-3.5 bottom-[108px] z-20 flex flex-col space-y-3 pointer-events-auto select-none">
      {/* Equalizer / Filter Button */}
      <button
        type="button"
        aria-label="Filtres"
        className="w-12 h-12 rounded-full bg-[#282847]/95 backdrop-blur-md border border-[#44446e]/80 flex items-center justify-center text-white shadow-lg shadow-black/50 hover:bg-[#34345c] active:scale-95 transition-all"
      >
        <svg className="w-5 h-5 text-white stroke-[1.9]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
          <circle cx="8" cy="7" r="2.2" fill="#282847" strokeWidth="1.9" />
          <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
          <circle cx="16" cy="12" r="2.2" fill="#282847" strokeWidth="1.9" />
          <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
          <circle cx="11" cy="17" r="2.2" fill="#282847" strokeWidth="1.9" />
        </svg>
      </button>

      {/* Target / Locate Crosshair Button */}
      <button
        type="button"
        aria-label="Recentrer"
        className="w-12 h-12 rounded-full bg-[#282847]/95 backdrop-blur-md border border-[#44446e]/80 flex items-center justify-center text-white shadow-lg shadow-black/50 hover:bg-[#34345c] active:scale-95 transition-all"
      >
        <svg className="w-5 h-5 text-white stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="7" />
          <line x1="12" y1="2" x2="12" y2="6" strokeLinecap="round" />
          <line x1="12" y1="18" x2="12" y2="22" strokeLinecap="round" />
          <line x1="2" y1="12" x2="6" y2="12" strokeLinecap="round" />
          <line x1="18" y1="12" x2="22" y2="12" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </button>
    </div>
  );
}
