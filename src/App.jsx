import React, { useState } from 'react';
import './App.css';
import ChampionGrid from './ChampionGrid';
import ChampionDetails from './ChampionDetails';
// Assurez-vous que les chemins d'importation sont corrects

function App() {
  const [selectedChampionId, setSelectedChampionId] = useState(null);

  const handleChampionSelect = (id) => {
    setSelectedChampionId(id);
  };

  return (
    <div className="App">
      {selectedChampionId ? (
        <ChampionDetails championId={selectedChampionId} />
      ) : (
        <ChampionGrid onSelectChampion={handleChampionSelect} />
      )}
    </div>
  );
}

export default App;
