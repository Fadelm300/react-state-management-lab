{zombieFighters.map(fighter => (
    <div key={fighter.name}>
      <img src={fighter.img} alt={fighter.name} />
      <p>{fighter.name}</p>
      <p>Price: {fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <button onClick={() => handleAddFighter(fighter)}>Add</button>
    </div>
  ))}