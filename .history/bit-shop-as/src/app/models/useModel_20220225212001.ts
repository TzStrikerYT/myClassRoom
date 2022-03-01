export class User {

    _id: string
    email: string
    password: string
    phone: string
    username: string
    permissions: any

    constructor (_id = "", email = "", password = "", phone = "", username = "", permissions={}) {

        this._id = _id
        this.email = email,
        this.password = password,
        this.phone = phone,
        this.username = username
        this.permissions = permissions

    }

}