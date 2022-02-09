const caraSello = new Promise((resolve, reject) => {

    let lado = 1

    if(lado === 1){
        resolve("cara")
    } else {
        reject("sello")
    }

})

caraSello
    .then((res) => res)
    .then((res2) => console.log(res2))
    .catch((rej) => console.log("Reject = " + rej))