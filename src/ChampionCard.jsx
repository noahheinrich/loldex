function ChampionCard({ champion, onSelect }) {
  const imagePath = `/images/icons/${champion.image}`;

  let regionColorClass = "";

  switch (champion.region) {
    case "Runeterra":
      regionColorClass = "runeterra-color";
      break;
    case "Ionia":
      regionColorClass = "ionia-color";
      break;
    case "Shurima":
      regionColorClass = "shurima-color";
      break;
    case "Freljord":
      regionColorClass = "freljord-color";
      break;
    case "Targon":
      regionColorClass = "targon-color";
      break;
    case "Demacia":
      regionColorClass = "demacia-color";
      break;
    case "Noxus":
      regionColorClass = "noxus-color";
      break;
    case "Bilgewater":
      regionColorClass = "bilgewater-color";
      break;
    case "Ixtal":
      regionColorClass = "ixtal-color";
      break;
    case "Piltover":
      regionColorClass = "piltover-color";
      break;
    case "Zaun":
      regionColorClass = "zaun-color";
      break;
    case "Iles Obscures":
      regionColorClass = "iles-color";
      break;
    case "Le Néant":
      regionColorClass = "neant-color";
      break;
    case "Bandle":
      regionColorClass = "bandle-color";
      break;

    default:
      regionColorClass = ""; // Par défaut, pas de classe spécifique
  }
  return (
    <div className={`champion-card ${regionColorClass}`} onClick={onSelect}>
      <img src={imagePath} alt={champion.name} />
      <h3>{champion.name}</h3>
    </div>
  );
}

export default ChampionCard;
