fetch("https://rickandmortyapi.com/api/character/2")
  .then((res) => res.json())
  .then((data) => printPersonaje(data));


function printPersonaje(dataPersonaje){
    console.log(dataPersonaje.name, dataPersonaje.status, dataPersonaje.species)
}