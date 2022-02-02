
function niño(seCae){
    if(seCae){
        padre("Grito")
    } else {
        padre("Papi ven!")
    }
}

function padre(llamado){
    if(llamado === "Grito"){
        llamar911(true)
    } else {
        console.log("Que pas hijo!")
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