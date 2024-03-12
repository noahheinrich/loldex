function ChampionCard({ champion, onSelect }) {

  const imagePath = `/images/icons/${champion.image}`;
  return (
    <div className="champion-card" onClick={onSelect}>
      <img src={imagePath} alt={champion.name} />
      <h3>{champion.name}</h3>
    </div>
  );
}

export default ChampionCard;