import React, { useState } from 'react';
import ChampionCard from './ChampionCard';
import championsData from './championsData';
import './ChampionGrid.css';

function ChampionGrid({ onSelectChampion }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const filteredChampions = championsData.filter(champion =>
    champion.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || champion.category === selectedCategory) &&
    (selectedRegion === '' || champion.region === selectedRegion)
  );

  // Obtenez toutes les catégories uniques
  const categories = [...new Set(championsData.map(champion => champion.category))];
  // Obtenez toutes les régions uniques
  const regions = [...new Set(championsData.map(champion => champion.region))];

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Rechercher un champion..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          <option value="">Toutes les catégories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={selectedRegion}
          onChange={handleRegionChange}
          className="filter-select"
        >
          <option value="">Toutes les régions</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="champion-grid">
        {filteredChampions.map((champion) => (
          <ChampionCard
            key={champion.id}
            champion={champion}
            onSelect={() => onSelectChampion(champion.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ChampionGrid;
