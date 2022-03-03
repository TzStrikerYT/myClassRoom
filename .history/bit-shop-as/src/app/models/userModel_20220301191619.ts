export class User {
  _id: string;
  email: string;
  password: string;
  phone: string;
  username: string;
  Permissions: any;
  isLogged: boolean;
  confirmPassword: string;

  constructor(
    _id = '',
    email = '',
    password = '',
    phone = '',
    username = '',
    Permissions = {},
    isLogged = false,
    confirmPassword = ""
  ) {
    this._id = _id;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.username = username;
    this.Permissions = Permissions;
    this.isLogged = isLogged;
    this.confirmPassword = confirmPassword
  }
}
