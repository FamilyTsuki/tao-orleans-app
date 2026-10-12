import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('accueil');

  // =========================================================================
  // FONCTIONS TAO À PERSONNALISER / MODIFIER SELON VOS BESOINS :
  // =========================================================================
  const handleProfileClick = () => {
    console.log('[TAO] Clic sur Profil utilisateur');
  };

  const handleSearchClick = () => {
    console.log('[TAO] Clic sur Recherche arrêt / lieu');
  };

  const handleItineraryClick = () => {
    console.log('[TAO] Clic sur Itinéraire');
  };

  const handleSosClick = () => {
    console.log('[TAO] Clic sur SOS');
  };

  const handleFilterClick = () => {
    console.log('[TAO] Clic sur Filtres réseau');
  };

  const handleLocateClick = () => {
    console.log('[TAO] Clic sur Recentrer (GPS Orléans)');
  };

  const handleTabClick = (tabName) => {
    console.log(`[TAO] Onglet actif: ${tabName}`);
    setActiveTab(tabName);
  };

  return (
    <div className="w-full h-full min-h-[100dvh] bg-[#070812] flex items-center justify-center m-0 p-0 overflow-hidden select-none">
      {/* 
        Container Principal :
        - Sur mobile : s'adapte à 100% de la hauteur de l'écran (100dvh) en plein écran sans déformation.
        - Sur PC / tablette : centré, conserve l'exact ratio d'aspect d'origine (460/1024) sans aucun étirement ou bug.
      */}
      <div className="relative h-[100dvh] max-h-[100dvh] aspect-[460/1024] max-w-full overflow-hidden bg-[#0d0f22] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] sm:rounded-[36px] sm:border sm:border-[#242745]">
        
        {/* 
          1. Image haute fidélité du réseau TAO :
          Affiche l'interface exacte au pixel près (sans aucun dédoublement ni flou).
        */}
        <img
          src="./tao_bg.png"
          alt="TAO Orléans"
          className="w-full h-full object-contain pointer-events-none select-none block"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />

        {/* =========================================================================
            ZONES TACTILES INTERACTIVES (Alignées au millimètre sur chaque bouton)
            Aucun doublon visuel, aucun élément envahissant.
            ========================================================================= */}

        {/* 1. Bouton Profil (cercle turquoise en haut à gauche) */}
        <button
          type="button"
          aria-label="Profil"
          onClick={handleProfileClick}
          className="absolute top-[3.5%] left-[5%] w-[11.5%] h-[5.2%] rounded-full cursor-pointer active:bg-white/20 transition-colors"
        />

        {/* 2. Barre de recherche (capsule en haut à droite) */}
        <button
          type="button"
          aria-label="Rechercher"
          onClick={handleSearchClick}
          className="absolute top-[3.5%] left-[19.2%] right-[5%] h-[5.2%] rounded-full cursor-pointer active:bg-white/10 transition-colors"
        />

        {/* 3. Bouton Itinéraire (pilule blanche sous la recherche) */}
        <button
          type="button"
          aria-label="Itinéraire"
          onClick={handleItineraryClick}
          className="absolute top-[9.7%] right-[5%] w-[31%] h-[4.8%] rounded-full cursor-pointer active:bg-black/10 transition-colors"
        />

        {/* 4. Bouton SOS latéral (dégradé jaune/orange à gauche) */}
        <button
          type="button"
          aria-label="SOS"
          onClick={handleSosClick}
          className="absolute top-[17.2%] left-0 w-[26%] h-[5.6%] rounded-r-full cursor-pointer active:bg-white/20 transition-colors"
        />

        {/* 5. Bouton Filtres / Égaliseur (en bas à droite) */}
        <button
          type="button"
          aria-label="Filtres"
          onClick={handleFilterClick}
          className="absolute bottom-[18.2%] right-[4.8%] w-[12.8%] h-[5.6%] rounded-full cursor-pointer active:bg-white/20 transition-colors"
        />

        {/* 6. Bouton Cible / Recentrage (en bas à droite) */}
        <button
          type="button"
          aria-label="Recentrer"
          onClick={handleLocateClick}
          className="absolute bottom-[11.6%] right-[4.8%] w-[12.8%] h-[5.6%] rounded-full cursor-pointer active:bg-white/20 transition-colors"
        />

        {/* 7. Barre de navigation TAO (4 onglets du bas) */}
        {/* Onglet Accueil */}
        <button
          type="button"
          aria-label="Accueil"
          onClick={() => handleTabClick('accueil')}
          className="absolute bottom-[4.2%] left-[4%] w-[22%] h-[7.8%] rounded-xl cursor-pointer active:bg-white/10 transition-colors"
        />

        {/* Onglet Horaires */}
        <button
          type="button"
          aria-label="Horaires"
          onClick={() => handleTabClick('horaires')}
          className="absolute bottom-[4.2%] left-[27%] w-[22%] h-[7.8%] rounded-xl cursor-pointer active:bg-white/10 transition-colors"
        />

        {/* Onglet Trafic */}
        <button
          type="button"
          aria-label="Trafic"
          onClick={() => handleTabClick('trafic')}
          className="absolute bottom-[4.2%] left-[51%] w-[22%] h-[7.8%] rounded-xl cursor-pointer active:bg-white/10 transition-colors"
        />

        {/* Onglet TAO */}
        <button
          type="button"
          aria-label="TAO"
          onClick={() => handleTabClick('tao')}
          className="absolute bottom-[4.2%] left-[75%] w-[21%] h-[7.8%] rounded-xl cursor-pointer active:bg-white/10 transition-colors"
        />

        {/* 8. Touches système Android (en bas) */}
        <button
          type="button"
          aria-label="Applications récentes"
          onClick={() => console.log('[Système] Récents')}
          className="absolute bottom-0 left-[15%] w-[18%] h-[4.2%] cursor-pointer active:bg-white/10"
        />
        <button
          type="button"
          aria-label="Accueil système"
          onClick={() => console.log('[Système] Accueil')}
          className="absolute bottom-0 left-[41%] w-[18%] h-[4.2%] cursor-pointer active:bg-white/10"
        />
        <button
          type="button"
          aria-label="Retour"
          onClick={() => console.log('[Système] Retour')}
          className="absolute bottom-0 left-[67%] w-[18%] h-[4.2%] cursor-pointer active:bg-white/10"
        />
      </div>
    </div>
  );
}
