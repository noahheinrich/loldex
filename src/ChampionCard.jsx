function ChampionCard({ champion }) {
  return (
    <div className="champion-card">
      <img src={champion.image} alt={champion.name} />
      <h3>{champion.name}</h3>
    </div>
  );
}
