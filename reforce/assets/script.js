// const caraSello = new Promise((resolve, reject) => {

//     let lado = 1

//     if(lado === 1){
//         resolve("cara")
//     } else {
//         reject("sello")
//     }

// })

// caraSello
//     .then(function a(res){ return res}) // = contenido de res
//     .then((res2) => console.log(res2)) // = respuesta del retorno del then anterior
//     .catch((rej) => console.log("Reject = " + rej))

fetch(`https://rickandmortyapi.com/api/character/2`)
    .then((response) => response.json())
    .then((data) => print(data))

function print(personaje){
    document.getElementById('nameCharacter').innerHTML = personaje.name
}