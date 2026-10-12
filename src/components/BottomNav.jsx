import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="w-full z-20 pointer-events-auto flex flex-col bg-[#131427] border-t border-[#1f213b]">
      {/* 4 Main Tabs */}
      <div className="w-full h-16 px-2 flex items-center justify-around select-none">
        {/* Tab 1: Accueil (Active) */}
        <button
          type="button"
          className="flex flex-col items-center justify-center py-1.5 px-5 bg-[#303452] rounded-xl text-white transition-all shadow-inner"
        >
          {/* Custom Map Pin in Circle Icon */}
          <div className="relative w-5 h-5 flex items-center justify-center mb-0.5">
            <svg className="w-5 h-5 text-white stroke-[1.9]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5a2.5 2.5 0 012.5 2.5c0 2-2.5 4.5-2.5 4.5S9.5 12 9.5 10a2.5 2.5 0 012.5-2.5z" />
              <circle cx="12" cy="10" r="0.8" fill="currentColor" />
            </svg>
          </div>
          <span className="text-[11.5px] font-medium tracking-tight">Accueil</span>
        </button>

        {/* Tab 2: Horaires */}
        <button
          type="button"
          className="flex flex-col items-center justify-center py-1.5 px-3 text-[#8e92af] hover:text-white transition-colors"
        >
          <Clock className="w-5 h-5 stroke-[1.8] mb-0.5" />
          <span className="text-[11.5px] font-normal tracking-tight">Horaires</span>
        </button>

        {/* Tab 3: Trafic */}
        <button
          type="button"
          className="flex flex-col items-center justify-center py-1.5 px-3 text-[#8e92af] hover:text-white transition-colors"
        >
          <AlertTriangle className="w-5 h-5 stroke-[1.8] mb-0.5" />
          <span className="text-[11.5px] font-normal tracking-tight">Trafic</span>
        </button>

        {/* Tab 4: TAO */}
        <button
          type="button"
          className="flex flex-col items-center justify-center py-1.5 px-3 text-[#8e92af] hover:text-white transition-colors"
        >
          {/* 3 dots in circle icon */}
          <div className="relative w-5 h-5 flex items-center justify-center mb-0.5">
            <svg className="w-5 h-5 text-current stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9" />
              <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" />
              <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
              <circle cx="16" cy="12" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          {/* Stylized TAO logo text */}
          <span className="text-[12px] font-extrabold tracking-tight font-serif italic text-white/90">Tao</span>
        </button>
      </div>

      {/* Android System Navigation Bar (Bottom) */}
      <div className="w-full h-11 bg-black flex items-center justify-around px-12 text-[#9a9db3] select-none">
        {/* Recents button (|||) */}
        <button type="button" aria-label="Applications récentes" className="p-2 hover:text-white active:scale-90 transition-transform">
          <div className="flex space-x-1 items-center h-4">
            <span className="w-[2px] h-3.5 bg-current rounded-sm"></span>
            <span className="w-[2px] h-3.5 bg-current rounded-sm"></span>
            <span className="w-[2px] h-3.5 bg-current rounded-sm"></span>
          </div>
        </button>

        {/* Home button (Rounded rectangle / squircle) */}
        <button type="button" aria-label="Accueil système" className="p-2 hover:text-white active:scale-90 transition-transform">
          <div className="w-4 h-4 border-2 border-current rounded-[5px]"></div>
        </button>

        {/* Back button (<) */}
        <button type="button" aria-label="Retour" className="p-2 hover:text-white active:scale-90 transition-transform">
          <svg className="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
