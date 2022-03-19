import React, { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters" style={Characters__grid}>
      {characters.map((character, index) => (
        <div style={card__character}>
          <h2 key={`char-${index}`}>{character.name}</h2>
          <img
            src={character.image}
            key={`img-${index}`}
            alt={`This is ${character.name}`}
          />
        </div>
      ))}
    </div>
  );
};

const Characters__grid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
}

const card__character = {
  margin: '5px',
  maxWidth: '300px'
}

export default Characters;
