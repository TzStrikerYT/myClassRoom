const caraSello = new Promise((resolve, reject) => {

    let lado = 1

    if(lado === 1){
        resolve("cara")
    } else {
        reject("sello")
    }

})

caraSello
    .then((res) => console.log("Response = " + res))
    .catch((rej) => console.log("Reject = " + rej))