
function niño(seCae){
    if(seCae){
        padre("Grito")
    } else {
        padre("Papi ven!")
    }
}

function padre(llamado){
    if(llamado === "Grito"){
        llamar911(false)
    } else {
        console.log("Que pasa hijo!")
    }
}

function llamar911(emergencia){
    if(emergencia){
        console.log("wiu wiu wiu wiu")
    } else {
        console.log("esto no es una emergencia, sea serio!!!")
    }
}

niño(false)