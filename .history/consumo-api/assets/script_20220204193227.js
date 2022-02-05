let personaje = fetch("https://rickandmortyapi.com/api/character/2")
  .then((res) => res.json())
  .then((data) => data);


console.log(personaje)