import React from 'react';

export default function SosButton() {
  return (
    <div className="absolute left-0 top-[175px] z-20 pointer-events-auto">
      <button
        type="button"
        aria-label="SOS Urgence"
        className="h-12 pl-4 pr-3.5 bg-gradient-to-r from-[#fcb92c] via-[#f77f32] to-[#f4534c] rounded-r-full flex items-center space-x-1.5 shadow-lg shadow-orange-950/50 hover:brightness-105 active:scale-95 transition-transform"
      >
        <span className="font-bold text-white text-[19px] tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          SOS
        </span>
        {/* Crisp Chevron > */}
        <svg className="w-5 h-5 text-white stroke-[2.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
