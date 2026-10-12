import React from 'react';

export default function TaoMap() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0c0d1e]">
      {/* High-definition authentic Orléans transit map */}
      <img
        src="./tao_bg_hd.png"
        alt="Carte Réseau TAO Orléans"
        className="w-full h-full object-cover object-center select-none pointer-events-none"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          filter: 'contrast(1.05) brightness(1.02)'
        }}
      />
    </div>
  );
}
