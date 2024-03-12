import React from 'react';
// Supposons que vous avez un fichier championsData ou une autre source de données
import championsData from './championsData';

function ChampionDetails({ championId, onBack}) {
  // Trouver le champion dans vos données basé sur l'ID fourni
  const champion = championsData.find(champ => champ.id === championId);

  if (!champion) {
    return <div>Champion non trouvé</div>;
  }

  return (
    <div className="champion-details">
      {/* Ajoutez un bouton ou un lien pour revenir en arrière */}
      <button onClick={onBack}>Retour</button>
      <h2>{champion.name}</h2>
      <img src={champion.image} alt={champion.name} />
      <p>{champion.description}</p>
      <p>Difficulté: {champion.difficulty}</p>
      <p>Catégorie: {champion.category}</p>
      {/* Ajoutez ici d'autres informations que vous souhaitez afficher */}
    </div>
  );
}

export default ChampionDetails;
