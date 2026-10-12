import React from 'react';

export default function StatusBar() {
  return (
    <div className="w-full h-8 px-4 flex items-center justify-between text-xs text-white select-none z-30 font-medium tracking-tight shrink-0 bg-transparent">
      {/* Time */}
      <div className="font-semibold text-[13.5px] tracking-normal text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        13:56
      </div>

      {/* Status Icons */}
      <div className="flex items-center space-x-1.5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        {/* Bluetooth icon */}
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
        </svg>

        {/* Location icon */}
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>

        {/* VoLTE icon */}
        <div className="flex items-center text-[9px] font-bold border border-white/90 rounded px-0.5 leading-none h-3.5">
          <span>Vo))<span className="text-[7.5px] ml-0.5">LTE</span></span>
        </div>

        {/* 4G+ Signal */}
        <div className="flex items-end space-x-[2px] h-3 ml-0.5">
          <span className="text-[8.5px] font-black mr-[1px] leading-none self-center">4G+</span>
          <span className="w-[2px] h-1 bg-white rounded-sm"></span>
          <span className="w-[2px] h-1.5 bg-white rounded-sm"></span>
          <span className="w-[2px] h-2 bg-white rounded-sm"></span>
          <span className="w-[2px] h-2.5 bg-white rounded-sm"></span>
        </div>

        {/* Battery percentage & icon */}
        <div className="flex items-center space-x-1 ml-1">
          <span className="text-[10px] font-bold text-white">16%</span>
          <div className="relative w-4 h-2 border border-white rounded-[2px] p-[1px] flex items-center">
            <div className="h-full bg-white rounded-[1px] w-[20%]"></div>
            <div className="absolute -right-[2.5px] top-[2px] w-[1.5px] h-1 bg-white rounded-r-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
