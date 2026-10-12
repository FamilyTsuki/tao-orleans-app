# TAO Orléans - Application Mobile Réplique

Application reproduisant fidèlement l'interface mobile de l'application **TAO (Transports de l'Agglomération Orléanaise)**.

## 📱 Fonctionnalités de l'interface
- **Barre de statut Android** personnalisée (13:56, 4G+, VoLTE, Bluetooth, batterie 16%).
- **En-tête de recherche** avec bouton profil cyan et bouton d'action *« Itinéraire »*.
- **Bouton d'urgence latéral** *SOS >* avec dégradé d'accent.
- **Carte nocturne TAO** avec tracé de la **Ligne A (Tramway)** en rouge, de la **Ligne B** en violet, repère Orléans et arrêts de réseau.
- **Commandes de carte flottantes** (réglages et recentrage GPS).
- **Navigation inférieure** à 4 onglets (*Accueil*, *Horaires*, *Trafic*, *TAO*) et barre système Android.
- **Sélecteur de modes de visualisation** : Cadre mobile, comparaison côte-à-côte avec la capture de référence, plein écran.

## 🛠️ Stack technique
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Leaflet](https://leafletjs.com/) (carte vectorielle & tuiles nocturnes)
- [Lucide Icons](https://lucide.dev/)

## 🚀 Lancement local
```bash
npm install
npm run dev
```
L'application est accessible sur `http://localhost:3000/`.

