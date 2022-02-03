function diMiNombre(nombre, apellido){
    //your code
    if(nombre && apellido){
        console.log(`Tu nombre es ${nombre} ${apellido}`)
    } else {
        console.log(`Para mi eres un NN`)
    }
    
}

diMiNombre('Michael','Cocuy')
diMiNombre('Gabriela','Carmona')
diMiNombre('Angel','Pedroza')
diMiNombre('', '')
diMiNombre()

function calculadoraHard(a,b){
    let res = a + b
    console.log(res)
}

calculadoraHard(34, 58)