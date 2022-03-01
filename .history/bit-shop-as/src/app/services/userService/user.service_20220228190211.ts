import { Injectable } from '@angular/core';
import { User } from '../../models/userModel'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  slectedUser = new User

  constructor() {
  }
}
