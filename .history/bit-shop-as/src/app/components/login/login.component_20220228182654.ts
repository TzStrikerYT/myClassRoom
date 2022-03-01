import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* valores del formulario */

  email=""
  password = ""

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.email, this.password)
    alert('Estas logueandote')
  }

}
