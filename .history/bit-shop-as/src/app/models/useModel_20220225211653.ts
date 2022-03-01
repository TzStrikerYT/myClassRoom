export class User {

    _id: string
    email: string
    password: string
    phone: string
    username: string

    constructor (_id = "", email = "", password = "", phone = "", username = "") {

        this._id = _id
        this.email = email,
        this.password = password,
        this.phone = phone,
        this.username = username

    }

}