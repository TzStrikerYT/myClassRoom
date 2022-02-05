fetch("https://rickandmortyapi.com/api/character/2")
  .then((res) => res.json())
  .then((data) => printPersonaje(data));


function printPersonaje(dataPersonaje){
    document.getElementById('cards') = `
    
    <div class="card" style="width: 18rem;">
            <img src="${dataPersonaje.image}" class="card-img-top" alt="Chicago Skyscrapers"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>

    `
}