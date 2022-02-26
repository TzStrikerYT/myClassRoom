export class User {
  _id: string;
  email: string;
  password: string;
  phone: string;
  username: string;
  permissions: any;
  isLogged: boolean;

  constructor(
    _id = '',
    email = '',
    password = '',
    phone = '',
    username = '',
    permissions = {},
    isLogged = false
  ) {
    this._id = _id;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.username = username;
    this.permissions = permissions;
    this.isLogged = isLogged;
  }
}
