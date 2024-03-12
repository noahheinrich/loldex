import React from 'react';
import championsData from './championsData'; 
import ChampionCard from './ChampionCard';

function ChampionGrid() {
  return (
    <div className="champion-grid">
      {championsData.map(champion => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </div>
  );
}

export default ChampionGrid;