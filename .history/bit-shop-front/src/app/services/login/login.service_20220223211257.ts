import { Injectable } from '@angular/core';
import { User } from '../../models/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  selectedUser: User

  constructor() {
    this.selectedUser = new User
  }
}
