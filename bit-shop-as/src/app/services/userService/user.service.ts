import { Injectable } from '@angular/core';
import { User } from '../../models/userModel'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router'; 
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  slectedUser: User
  //url_api = 'http://localhost:5000/api/user'
  url_api = `${environment.API_URL}/user`

  constructor(private http: HttpClient, private router: Router) {
    this.slectedUser = new User
  }

  // conexion para login
  /*
  credentials = {
    email: "",
    password: "",
  }
  */

  login(credentials: any){
    return this.http.post(`${this.url_api}/login`, credentials)
  }

  /*
  formUser = {
    email: "",
    password: "",
    phone: "",
    username: ""
  }
  */
  register(formUser: any){
    return this.http.post(`${this.url_api}/create-user`, formUser)
  }

  loggedIn(){
    return localStorage.getItem('token') ? true : false 
  }

  isAdmin(){
    const { permissions } = this.getDataFromToken()

    if(permissions.admin){
      return true
    }
    return false

  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getDataFromToken() :any {
    const token = this.getToken()
    const decoded = jwtDecode(token ? token : "Error in token")
    return decoded
  }

}



