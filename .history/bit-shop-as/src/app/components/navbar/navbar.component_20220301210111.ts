import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token=true
  user='Michael Cocuy'

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('auth_token')
  }

}
