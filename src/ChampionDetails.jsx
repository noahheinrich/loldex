import React from "react";
import championsData from "./championsData";

function ChampionDetails({ championId, onBack }) {
  const champion = championsData.find((champ) => champ.id === championId);

  // Assurez-vous que champion est défini avant de continuer
  if (!champion) {
    return <div>Champion non trouvé</div>;
  }

  const imagePath = `/images/icons/${champion.image}`;

  // Ajoutez des vérifications pour s'assurer que StrongMatchup et WeakMatchup ne sont pas undefined
  const strongMatchups = champion.StrongMatchup
    ? championsData.filter((champ) => champion.StrongMatchup.includes(champ.name))
    : [];

  const weakMatchups = champion.WeakMatchup
    ? championsData.filter((champ) => champion.WeakMatchup.includes(champ.name))
    : [];
  
  return (
    <div className="champion-details">
      <button onClick={onBack}>Retour</button>
      <h2>{champion.name}</h2>
      <img src={imagePath} alt={champion.name} />
      {/* Les autres détails du champion... */}
      <div>
        <h3>Fort contre :</h3>
        
        {strongMatchups.map((matchup) => (
          <img
            key={matchup.id}
            src={`/images/icons/${matchup.image}`}
            alt={matchup.name}
            title={matchup.name}
            style={{ width: "50px", height: "50px" }}
          />
        ))}
      </div>
      <div>
        <h3>Faible contre :</h3>
        {weakMatchups.map((matchup) => (
          <img
            key={matchup.id}
            src={`/images/icons/${matchup.image}`}
            alt={matchup.name}
            title={matchup.name}
            style={{ width: "50px", height: "50px" }}
          />
        ))}
      </div>
      <p>Difficulté: {champion.difficulty}</p>
      <p>Catégorie: {champion.category}</p>
      <p>Titre : {champion.title}</p>
      <p>Région : {champion.region}</p>
      <p>Description : {champion.description}</p>
    </div>
  );
}

export default ChampionDetails;
