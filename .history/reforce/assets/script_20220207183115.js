const caraSello = new Promise((resolve, reject) => {

    let lado = 0

    if(lado === 1){
        resolve("cara")
    } else {
        reject("sello")
    }

})

caraSello
    .then((res) => console.log("Response = " +res))
    .catch((rej) => console.log("Reject = " + rej))