import React from 'react';
import StatusBar from './StatusBar';
import HeaderSearch from './HeaderSearch';
import SosButton from './SosButton';
import FloatingMapControls from './FloatingMapControls';
import BottomNav from './BottomNav';
import TaoMap from './TaoMap';

export default function PhoneScreen() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-[#0c0d1e] select-none">
      {/* 1. Background Interactive Dark Transit Map */}
      <TaoMap />

      {/* 2. Top Section: Status Bar + Search Bar & Itinéraire Button */}
      <div className="relative z-20 flex flex-col w-full pt-1">
        <StatusBar />
        <HeaderSearch />
      </div>

      {/* 3. Floating Left Action: SOS Capsule Button */}
      <SosButton />

      {/* 4. Floating Right Action: Equalizer Sliders & Target/Locate Buttons */}
      <FloatingMapControls />

      {/* 5. Bottom Navigation Bar + Android System Nav */}
      <div className="relative z-20 w-full mt-auto">
        <BottomNav />
      </div>
    </div>
  );
}

