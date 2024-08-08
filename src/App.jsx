import React, { useState } from 'react';
import './App.css';

const App = () => {
  // data
  const initialZombieFighters = [
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: 'Tracker', price: 14, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/d32776' },
    { name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: 'https://via.placeholder.com/150/1ee8a4' },
    { name: 'Medic', price: 15, strength: 5, agility: 7, img: 'https://via.placeholder.com/150/66b7d2' },
    { name: 'Engineer', price: 16, strength: 6, agility: 5, img: 'https://via.placeholder.com/150/56acb2' },
    { name: 'Brawler', price: 11, strength: 8, agility: 3, img: 'https://via.placeholder.com/150/8985dc' },
    { name: 'Infiltrator', price: 17, strength: 5, agility: 9, img: 'https://via.placeholder.com/150/392537' },
    { name: 'Leader', price: 22, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/602b9e' },
  ];


  // Initial State 
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters] = useState(initialZombieFighters);

  const calculateTotalStrength = (team) => {
    return team.reduce((total, fighter) => total + fighter.strength, 0);
  };

  const calculateTotalAgility = (team) => {
    return team.reduce((total, fighter) => total + fighter.agility, 0);
  };

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      console.log("Not enough money");
    }
  };
// gpt help *_^ handleRemoveFighter

  const handleRemoveFighter = (index) => {
    const removedFighter = team[index];
    const newTeam = team.filter((_, i) => i !== index);
    setTeam(newTeam);
    setMoney(money + removedFighter.price);
  };


  return (
    <div>
      

      <h1>Zombie Fighters</h1>


      <div>
        <h2>Stats</h2>
        <p>Total Strength: {calculateTotalStrength(team)}</p>
        <p>Total Agility: {calculateTotalAgility(team)}</p>
      </div>


      <h2>Money: ${money}</h2>
      {/* Display the Team بس انه يعرض الفريق الموجود ويحدثه نضيف له  الحذف  */}
      
      <div>
        <h2>Your Team</h2>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul>
            {team.map((fighter, index) => (
              <li key={index}>
                <img src={fighter.img} alt={fighter.name} />
                <p>{fighter.name}</p>

                {/* button to remove  */}
                <button onClick={() => handleRemoveFighter(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>





      <div>
        <h2>Available Fighters</h2>

{/* البيانات الموجودة في الداتا ونبي نستخدمهم نحتاج نعرضهم ونضيف زر اضافة */}
        <ul>
          {zombieFighters.map((fighter, index) => (
            <li key={index}>
              {/* show  */}
              <img src={fighter.img} alt={fighter.name} />
              <p>{fighter.name}</p>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>

              {/* button to add fighter */}
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
      
    
    </div>


  );
};

export default App;