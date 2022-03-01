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

  objeto = {
    name: "",
    email: ""
  }

  constructor() {
   }

  ngOnInit(): void {
  }

  login(){
    console.log(this.objeto)
  }

}
