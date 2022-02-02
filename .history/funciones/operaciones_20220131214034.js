
function niño(seCae){

    let respuesta

    if(seCae){
        respuesta = padre("Grito")
    } else {
        respuesta = padre("Papi ven!")
    }

    return respuesta
}

function padre(llamado){
    if(llamado === "Grito"){
        return llamar911(true)
    } else {
        return "Que pasa hijo!"
    }
}

function llamar911(emergencia){
    if(emergencia){
        return "wiu wiu wiu wiu"
    } else {
        return "esto no es una emergencia, sea serio!!!"
    }
}

function imprimir(respuesta){
    console.log(respuesta)
}

let caida = niño(true)

function imprimir(caida)