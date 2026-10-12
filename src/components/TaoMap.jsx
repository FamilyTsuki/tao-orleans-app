import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function TaoMap() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Center Orléans precisely as framed in the user's screenshot
    const centerLat = 47.9002;
    const centerLng = 1.9045;

    const map = L.map(mapContainerRef.current, {
      center: [centerLat, centerLng],
      zoom: 14.5,
      zoomControl: false,
      attributionControl: false,
      minZoom: 12,
      maxZoom: 18,
    });

    mapInstanceRef.current = map;

    // Dark Map tile layer
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: 18,
        className: 'tao-tiles'
      }
    ).addTo(map);

    // Exact Tramway Line A (Red line)
    // Matches the Orléans line: Avenue de Paris -> Gare -> Place d'Arc -> Rue Royale -> Pont George V -> Dauphine -> Saint-Marceau
    const tramLineACoords = [
      [47.9250, 1.9015], // North
      [47.9205, 1.9022],
      [47.9170, 1.9030],
      [47.9130, 1.9045],
      [47.9095, 1.9070],
      [47.9075, 1.9090], // Gare d'Orléans curve
      [47.9065, 1.9070],
      [47.9048, 1.9030], // Place d'Arc
      [47.9030, 1.9012], // Just west of Place du Martroi
      [47.9010, 1.9020], // Rue Royale
      [47.8968, 1.9025], // Pont George V over the Loire
      [47.8935, 1.9028], // Tourelles-Dauphine
      [47.8885, 1.9033], // Avenue Dauphine
      [47.8835, 1.9037], // Saint-Marceau
      [47.8795, 1.9043],
      [47.8765, 1.9068], // Bending south-east towards Zénith
      [47.8720, 1.9115],
      [47.8680, 1.9145],
      [47.8645, 1.9130]
    ];

    // Red glow layer
    L.polyline(tramLineACoords, {
      color: '#e53935',
      weight: 6.5,
      opacity: 0.5,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Red main line
    L.polyline(tramLineACoords, {
      color: '#f42d45',
      weight: 4.5,
      opacity: 1,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Tram Line B (Purple line)
    const tramLineBCoords = [
      [47.9055, 1.8750],
      [47.9045, 1.8880],
      [47.9036, 1.8970],
      [47.9028, 1.9025], // Crosses Line A near Martroi
      [47.9020, 1.9110],
      [47.9032, 1.9210],
      [47.9060, 1.9330],
      [47.9085, 1.9420]
    ];

    // Purple glow
    L.polyline(tramLineBCoords, {
      color: '#9333ea',
      weight: 4.5,
      opacity: 0.45,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Purple main
    L.polyline(tramLineBCoords, {
      color: '#b966fc',
      weight: 3,
      opacity: 0.95,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    // Stop dots along Line A (white dots with dark edge)
    tramLineACoords.forEach((coord) => {
      const stopDotIcon = L.divIcon({
        className: 'custom-stop-dot',
        html: `<div style="
          width: 6.5px;
          height: 6.5px;
          background: #ffffff;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.6);
          box-shadow: 0 0 4px rgba(255,255,255,0.9);
        "></div>`,
        iconSize: [6.5, 6.5],
        iconAnchor: [3.25, 3.25]
      });

      L.marker(coord, { icon: stopDotIcon }).addTo(map);
    });

    // Orléans city center label & cyan location marker (matching screenshot)
    const orleansIcon = L.divIcon({
      className: 'custom-orleans-marker',
      html: `
        <div style="display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -50%);">
          <div style="
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            font-weight: 800;
            font-size: 19.5px;
            color: #ffffff;
            letter-spacing: -0.4px;
            text-shadow: 0 2px 5px rgba(0,0,0,0.95), 0 0 10px rgba(0,0,0,0.9);
            white-space: nowrap;
            margin-bottom: 2px;
          ">
            Orléans
          </div>
          <div style="
            width: 18px;
            height: 18px;
            background: #38bdf8;
            border: 3.5px solid #ffffff;
            border-radius: 50%;
            box-shadow: 0 0 12px rgba(56, 189, 248, 0.95), 0 2px 6px rgba(0,0,0,0.8);
          "></div>
        </div>
      `,
      iconSize: [100, 50],
      iconAnchor: [50, 25]
    });

    L.marker([47.9022, 1.9055], { icon: orleansIcon }).addTo(map);

    // Scattered transit network stop dots across Orléans
    const networkStops = [
      [47.9150, 1.8950], [47.9190, 1.9120], [47.9110, 1.9180], [47.9230, 1.9080],
      [47.9140, 1.8880], [47.9070, 1.8920], [47.9090, 1.8800], [47.9160, 1.8820],
      [47.9120, 1.9020], [47.9180, 1.8990], [47.9220, 1.8940], [47.9080, 1.9250],
      [47.9050, 1.9160], [47.9010, 1.9190], [47.9060, 1.9280], [47.8990, 1.9120],
      [47.9030, 1.8900], [47.8980, 1.8920], [47.8960, 1.8840], [47.9020, 1.8790],
      [47.9045, 1.9240], [47.9000, 1.9080], [47.9052, 1.9010], [47.9070, 1.9130],
      [47.8970, 1.8930], [47.8965, 1.9100], [47.8950, 1.9180], [47.8985, 1.9080],
      [47.8990, 1.8990], [47.8975, 1.9060], [47.8960, 1.8970],
      [47.8910, 1.8950], [47.8880, 1.8890], [47.8850, 1.8960], [47.8820, 1.8900],
      [47.8900, 1.9120], [47.8860, 1.9150], [47.8810, 1.9140], [47.8780, 1.9190],
      [47.8830, 1.9250], [47.8870, 1.9280], [47.8740, 1.8980], [47.8710, 1.9050],
      [47.8680, 1.8950], [47.8750, 1.9220], [47.8690, 1.9280], [47.8640, 1.9220],
      [47.8860, 1.9080], [47.8895, 1.8980], [47.8835, 1.8920], [47.8790, 1.9110],
      [47.9175, 1.8885], [47.9210, 1.8820], [47.9140, 1.8760], [47.8920, 1.8730],
      [47.8850, 1.8790], [47.8800, 1.8840], [47.8720, 1.8880], [47.8660, 1.8890]
    ];

    networkStops.forEach(pos => {
      const dot = L.divIcon({
        className: 'scattered-stop-dot',
        html: `<div style="
          width: 5px;
          height: 5px;
          background: #f8fafc;
          border-radius: 50%;
          opacity: 0.9;
          box-shadow: 0 0 3px rgba(255,255,255,0.8);
        "></div>`,
        iconSize: [5, 5],
        iconAnchor: [2.5, 2.5]
      });
      L.marker(pos, { icon: dot }).addTo(map);
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0e1026]">
      {/* Real Interactive Map Canvas */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Midnight Navy-Indigo Color Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-color z-[401]" 
        style={{ backgroundColor: '#202452', opacity: 0.52 }} 
      />

      {/* Le Duit sandbar label watermark on Loire river */}
      <div className="absolute inset-0 pointer-events-none select-none z-[450]">
        <div 
          className="absolute top-[548px] left-[21%] text-[11.5px] text-slate-200/90 font-bold tracking-wide"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.95)' }}
        >
          Le Duit
        </div>
      </div>
    </div>
  );
}

