import React from 'react';
import championsData from './championsData'; 
import ChampionCard from './ChampionCard';

function ChampionGrid({ onSelectChampion }) {
  return (
    <div className="champion-grid">
      {championsData.map(champion => (
        <ChampionCard key={champion.id} champion={champion} onSelect={() => onSelectChampion(champion.id)} />
      ))}
    </div>
  );
}


export default ChampionGrid;