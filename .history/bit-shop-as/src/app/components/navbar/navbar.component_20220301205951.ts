import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token=true
  user='Michael Cocuy'

  constructor() { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('auth_token')
  }

}
