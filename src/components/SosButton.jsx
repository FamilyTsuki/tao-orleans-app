import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function SosButton() {
  return (
    <div className="absolute left-0 top-[175px] z-20 pointer-events-auto">
      <button
        type="button"
        className="h-12 pl-4 pr-3.5 bg-gradient-to-r from-[#fbb52b] via-[#f78631] to-[#f3524b] rounded-r-full flex items-center space-x-1.5 shadow-lg shadow-orange-950/40 hover:brightness-105 active:scale-95 transition-all text-white font-bold text-lg tracking-wide"
      >
        <span className="drop-shadow-sm font-sans tracking-tight">SOS</span>
        <ChevronRight className="w-5 h-5 text-white stroke-[2.8] stroke-white" />
      </button>
    </div>
  );
}

