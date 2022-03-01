import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* valores del formulario */

  User = {
    email: "",
    password: ""
  }

  constructor(public userService: UserService) {
   }

  ngOnInit(): void {
  }

  login(form: NgForm){
    console.log(form)
  }

}
