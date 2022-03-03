import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token=false
  user='Michael Cocuy'

  constructor() {
  }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('auth_token')
  }

}
