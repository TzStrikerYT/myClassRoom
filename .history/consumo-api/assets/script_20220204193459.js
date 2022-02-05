let personaje

fetch("https://rickandmortyapi.com/api/character/2")
  .then((res) => res.json())
  .then((data) => personaje = data);


  console.log(personaje)