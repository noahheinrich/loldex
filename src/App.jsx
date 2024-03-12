import React from 'react';
//import './App.css'; // Assurez-vous que ce fichier contient vos styles globaux
import ChampionGrid from './ChampionGrid';
// Importez d'autres composants globaux, comme Header ou Footer, si vous en avez

function App() {
  return (
    <div className="App">
      {/* Vous pouvez inclure ici un Header si vous en avez un */}
      <ChampionGrid />
      {/* Ici, vous pourriez ajouter un Footer si nécessaire */}
    </div>
  );
}

export default App;
