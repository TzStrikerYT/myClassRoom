import { Injectable } from '@angular/core';
import { User } from '../../models/userModel'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  slectedUser: User

  constructor(public http: HttpClient) {
    this.slectedUser = new User
  }
}
