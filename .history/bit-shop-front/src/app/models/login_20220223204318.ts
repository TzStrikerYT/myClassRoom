export class User {
    
    // declaracion de estados de los atributos
    email: string
    password : string

    constructor (email = "", password = "") {
        //instanciacion o inicializacion de los atributos
        this.email = email,
        this.password = password

    }
}