function promesa() {

    let condicion = true
    
    let prom = new Promise((resolve, reject) => {

        if(condicion){
            resolve(`Resuelta`)
        } else {
            reject(`rechazada`)
        }

    })


}