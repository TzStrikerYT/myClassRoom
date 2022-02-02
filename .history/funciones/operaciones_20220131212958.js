
function niño(seCae){
    if(seCae){
        padre("Grito")
    }
}

function padre(llamado){
    if(llamado === "Grito"){
        llamar911(true)
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