function ChampionCard({ champion, onSelect }) {
  return (
    <div className="champion-card" onClick={onSelect}>
      <img src={champion.image} alt={champion.name} />
      <h3>{champion.name}</h3>
    </div>
  );
}

export default ChampionCard;