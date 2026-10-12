import React, { useState } from 'react';

export default function App() {
  // State for active bottom navigation tab
  const [activeTab, setActiveTab] = useState('accueil'); // 'accueil' | 'horaires' | 'trafic' | 'tao'
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Helper to show brief feedback when interacting with elements
  const showFeedback = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  // --- Functions you can modify for your TAO work ---
  const handleProfileClick = () => {
    showFeedback('Profil utilisateur TAO');
  };

  const handleItineraryClick = () => {
    showFeedback('Recherche d\'itinéraire...');
  };

  const handleSosClick = () => {
    showFeedback('Fonction SOS déclenchée');
  };

  const handleFilterClick = () => {
    showFeedback('Filtres du réseau (Lignes, Arrêts)');
  };

  const handleLocateClick = () => {
    showFeedback('Centrage sur votre position à Orléans');
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    showFeedback(`Onglet: ${tabName.toUpperCase()}`);
  };

  return (
    <div className="w-full h-full min-h-[100dvh] bg-[#0c0d1e] flex items-center justify-center m-0 p-0 overflow-hidden">
      {/* Mobile Screen Container: fits 100% of any smartphone display */}
      <div className="relative w-full h-[100dvh] max-w-[460px] bg-[#0d0f22] overflow-hidden select-none">
        
        {/* Authentic pixel-perfect TAO image background */}
        <img
          src="./tao_bg.png"
          alt="Application TAO"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />

        {/* =========================================================================
            INTERACTIVE OVERLAY ZONES (Calquées sur chaque bouton de l'interface)
            ========================================================================= */}

        {/* 1. Bouton Profil (Haut Gauche) */}
        <button
          type="button"
          aria-label="Profil utilisateur"
          onClick={handleProfileClick}
          className="absolute top-[3.5%] left-[5%] w-[11%] h-[5%] rounded-full cursor-pointer active:opacity-60 transition-opacity z-20"
        />

        {/* 2. Barre de recherche (Haut Droite) */}
        <div
          className="absolute top-[3.5%] left-[19%] right-[5%] h-[5.1%] z-20 flex items-center px-4"
          onClick={() => setIsSearchActive(true)}
        >
          {isSearchActive ? (
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => {
                if (!searchQuery) setIsSearchActive(false);
              }}
              placeholder="Rechercher un arrêt, un lieu..."
              className="w-full h-full bg-[#23213d] text-white text-[13.5px] rounded-full px-4 outline-none border border-[#4f4b75]"
            />
          ) : (
            <div className="w-full h-full cursor-pointer active:opacity-60 rounded-full" />
          )}
        </div>

        {/* 3. Bouton Itinéraire (Sous la recherche) */}
        <button
          type="button"
          aria-label="Itinéraire"
          onClick={handleItineraryClick}
          className="absolute top-[9.6%] right-[5%] w-[31%] h-[4.9%] rounded-full cursor-pointer active:scale-95 transition-transform z-20"
        />

        {/* 4. Bouton SOS latéral (Bord gauche) */}
        <button
          type="button"
          aria-label="SOS Urgence"
          onClick={handleSosClick}
          className="absolute top-[17.2%] left-0 w-[26%] h-[5.5%] rounded-r-full cursor-pointer active:scale-95 transition-transform z-20"
        />

        {/* 5. Bouton Filtres / Égaliseur (Bas Droite) */}
        <button
          type="button"
          aria-label="Filtres"
          onClick={handleFilterClick}
          className="absolute bottom-[18.2%] right-[4.8%] w-[12.5%] h-[5.6%] rounded-full cursor-pointer active:scale-95 transition-transform z-20"
        />

        {/* 6. Bouton Cible / Géolocalisation (Bas Droite) */}
        <button
          type="button"
          aria-label="Recentrer"
          onClick={handleLocateClick}
          className="absolute bottom-[11.6%] right-[4.8%] w-[12.5%] h-[5.6%] rounded-full cursor-pointer active:scale-95 transition-transform z-20"
        />

        {/* 7. Barre de navigation inférieure (4 Onglets) */}
        {/* Onglet Accueil */}
        <button
          type="button"
          aria-label="Accueil"
          onClick={() => handleTabClick('accueil')}
          className="absolute bottom-[4.2%] left-[4%] w-[22%] h-[7.8%] rounded-xl cursor-pointer active:opacity-70 transition-opacity z-20"
        />

        {/* Onglet Horaires */}
        <button
          type="button"
          aria-label="Horaires"
          onClick={() => handleTabClick('horaires')}
          className="absolute bottom-[4.2%] left-[27%] w-[22%] h-[7.8%] cursor-pointer active:opacity-70 transition-opacity z-20"
        />

        {/* Onglet Trafic */}
        <button
          type="button"
          aria-label="Trafic"
          onClick={() => handleTabClick('trafic')}
          className="absolute bottom-[4.2%] left-[51%] w-[22%] h-[7.8%] cursor-pointer active:opacity-70 transition-opacity z-20"
        />

        {/* Onglet TAO */}
        <button
          type="button"
          aria-label="TAO"
          onClick={() => handleTabClick('tao')}
          className="absolute bottom-[4.2%] left-[75%] w-[21%] h-[7.8%] cursor-pointer active:opacity-70 transition-opacity z-20"
        />

        {/* 8. Touches de navigation Android (en bas) */}
        <button
          type="button"
          aria-label="Applications récentes"
          onClick={() => showFeedback('Récents (Android)')}
          className="absolute bottom-0 left-[15%] w-[18%] h-[4.2%] cursor-pointer active:opacity-50 z-20"
        />
        <button
          type="button"
          aria-label="Accueil système"
          onClick={() => showFeedback('Accueil (Android)')}
          className="absolute bottom-0 left-[41%] w-[18%] h-[4.2%] cursor-pointer active:opacity-50 z-20"
        />
        <button
          type="button"
          aria-label="Retour arrière"
          onClick={() => showFeedback('Retour (Android)')}
          className="absolute bottom-0 left-[67%] w-[18%] h-[4.2%] cursor-pointer active:opacity-50 z-20"
        />

        {/* Feedback visuel lors du clic/toucher */}
        {toastMessage && (
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 bg-[#1b1e38]/95 border border-[#3b3e68] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-2xl backdrop-blur-md z-50 animate-bounce pointer-events-none">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
}
