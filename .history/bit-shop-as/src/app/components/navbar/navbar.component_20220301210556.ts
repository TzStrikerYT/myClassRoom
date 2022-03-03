import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: Boolean
  user='Michael Cocuy'

  constructor() {
    this.token = (localStorage.getItem('auth_token') ? true : false)
   }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('auth_token')
  }

}
