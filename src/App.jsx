import React, { useState } from 'react';
import PhoneScreen from './components/PhoneScreen';
import { Smartphone, Eye, Maximize2, SplitSquareVertical } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState('phone'); // 'phone' | 'split' | 'fullscreen'

  return (
    <div className="min-h-screen w-full bg-[#070811] text-slate-100 flex flex-col items-center justify-center relative font-sans">
      {/* Top Floating Control Bar for easy preview */}
      <header className="fixed top-3 z-50 flex items-center bg-[#151728]/90 backdrop-blur-md border border-[#2b2e50] rounded-full px-3 py-1.5 shadow-2xl text-xs space-x-2">
        <span className="font-semibold text-teal-400 pl-2 mr-1 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          TAO Orléans
        </span>

        <button
          type="button"
          onClick={() => setViewMode('phone')}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded-full transition-all ${
            viewMode === 'phone'
              ? 'bg-[#2b3052] text-white font-medium shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Cadre Mobile</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('split')}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded-full transition-all ${
            viewMode === 'split'
              ? 'bg-[#2b3052] text-white font-medium shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <SplitSquareVertical className="w-3.5 h-3.5" />
          <span>Comparaison (Image / App)</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('fullscreen')}
          className={`flex items-center space-x-1.5 px-3 py-1 rounded-full transition-all ${
            viewMode === 'fullscreen'
              ? 'bg-[#2b3052] text-white font-medium shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Plein écran</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="w-full h-screen flex items-center justify-center p-2 sm:p-6 overflow-auto">
        {viewMode === 'fullscreen' ? (
          /* Fullscreen Mobile View */
          <div className="w-full h-full max-w-[480px] bg-[#0c0d1e] shadow-2xl overflow-hidden relative">
            <PhoneScreen />
          </div>
        ) : viewMode === 'split' ? (
          /* Side by Side Comparison */
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 py-6">
            {/* Original Uploaded Image */}
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-amber-400" /> Image originale
              </span>
              <div className="w-[390px] h-[844px] rounded-[48px] overflow-hidden border-[6px] border-[#20233b] shadow-2xl bg-black">
                <img
                  src="/reference.png"
                  alt="Original TAO screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Generated Interactive App */}
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider text-teal-400 font-semibold mb-2 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-teal-400" /> Application réplique
              </span>
              <div className="relative w-[390px] h-[844px] rounded-[48px] overflow-hidden border-[8px] border-[#22253f] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] bg-[#0c0d1e]">
                {/* Smartphone speaker notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-40 pointer-events-none flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111322] border border-white/10 -mr-6"></div>
                </div>
                <PhoneScreen />
              </div>
            </div>
          </div>
        ) : (
          /* Standard Phone Mockup View */
          <div className="relative w-[390px] h-[844px] rounded-[48px] overflow-hidden border-[8px] border-[#22253f] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] bg-[#0c0d1e] mt-10">
            {/* Top Camera Punch-hole (Small discrete dot) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-black/90 border border-white/10 z-40 pointer-events-none"></div>
            
            {/* Phone Screen Component */}
            <PhoneScreen />
          </div>
        )}
      </main>
    </div>
  );
}
