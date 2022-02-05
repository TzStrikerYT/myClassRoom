function promesa() {

    let condicion = true
    
    let prom = new Promise(function x(resolve, reject){

        if(condicion){
            resolve(`Resuelta`)
        } else {
            reject(`rechazada`)
        }

    })

    return promesa
}