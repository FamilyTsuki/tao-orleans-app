import React, { useState } from 'react';

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('accueil');

  return (
    <div className="w-full z-20 pointer-events-auto flex flex-col bg-[#131427] border-t border-[#1f213c] shrink-0 select-none">
      {/* 4 Main Tabs */}
      <div className="w-full h-[62px] px-2 flex items-center justify-around">
        {/* Tab 1: Accueil */}
        <button
          type="button"
          onClick={() => setActiveTab('accueil')}
          className={`flex flex-col items-center justify-center py-1.5 px-4 rounded-xl transition-all ${
            activeTab === 'accueil'
              ? 'bg-[#313454] text-white shadow-inner'
              : 'text-[#8e92af] hover:text-white'
          }`}
        >
          {/* Custom Pin inside Circle Icon */}
          <div className="w-5 h-5 flex items-center justify-center mb-0.5">
            <svg className="w-5 h-5 text-current stroke-[1.9]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9.2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5a2.5 2.5 0 012.5 2.5c0 2-2.5 4.5-2.5 4.5S9.5 12 9.5 10a2.5 2.5 0 012.5-2.5z" />
              <circle cx="12" cy="10" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <span className="text-[11.5px] font-medium tracking-tight">Accueil</span>
        </button>

        {/* Tab 2: Horaires */}
        <button
          type="button"
          onClick={() => setActiveTab('horaires')}
          className={`flex flex-col items-center justify-center py-1.5 px-3 transition-colors ${
            activeTab === 'horaires'
              ? 'bg-[#313454] text-white rounded-xl'
              : 'text-[#8e92af] hover:text-white'
          }`}
        >
          {/* Clock Icon */}
          <div className="w-5 h-5 flex items-center justify-center mb-0.5">
            <svg className="w-5 h-5 text-current stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 6 12 12 15 14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[11.5px] font-normal tracking-tight">Horaires</span>
        </button>

        {/* Tab 3: Trafic */}
        <button
          type="button"
          onClick={() => setActiveTab('trafic')}
          className={`flex flex-col items-center justify-center py-1.5 px-3 transition-colors ${
            activeTab === 'trafic'
              ? 'bg-[#313454] text-white rounded-xl'
              : 'text-[#8e92af] hover:text-white'
          }`}
        >
          {/* Warning Triangle Icon */}
          <div className="w-5 h-5 flex items-center justify-center mb-0.5">
            <svg className="w-5 h-5 text-current stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" strokeLinecap="round" />
              <line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
          </div>
          <span className="text-[11.5px] font-normal tracking-tight">Trafic</span>
        </button>

        {/* Tab 4: TAO */}
        <button
          type="button"
          onClick={() => setActiveTab('tao')}
          className={`flex flex-col items-center justify-center py-1.5 px-3 transition-colors ${
            activeTab === 'tao'
              ? 'bg-[#313454] text-white rounded-xl'
              : 'text-[#8e92af] hover:text-white'
          }`}
        >
          {/* 3 dots in circle */}
          <div className="w-5 h-5 flex items-center justify-center mb-0.5">
            <svg className="w-5 h-5 text-current stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="9" />
              <circle cx="8" cy="12" r="0.9" fill="currentColor" stroke="none" />
              <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
              <circle cx="16" cy="12" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </div>
          {/* Stylized Tao brand logo */}
          <span className="text-[12.5px] font-extrabold tracking-tight font-serif italic text-white/95">
            Tao
          </span>
        </button>
      </div>

      {/* Android System Navigation Bar (Bottom) */}
      <div className="w-full h-10 bg-black flex items-center justify-around px-12 text-[#9a9db3]">
        {/* Recents button (|||) */}
        <button type="button" aria-label="Applications récentes" className="p-2 hover:text-white active:scale-90 transition-transform">
          <div className="flex space-x-1 items-center h-4">
            <span className="w-[2px] h-3.5 bg-current rounded-sm"></span>
            <span className="w-[2px] h-3.5 bg-current rounded-sm"></span>
            <span className="w-[2px] h-3.5 bg-current rounded-sm"></span>
          </div>
        </button>

        {/* Home button (Rounded squircle) */}
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
