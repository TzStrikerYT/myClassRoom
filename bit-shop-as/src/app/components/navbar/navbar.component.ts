import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService) {

  }

  ngOnInit(): void {
  }

}
