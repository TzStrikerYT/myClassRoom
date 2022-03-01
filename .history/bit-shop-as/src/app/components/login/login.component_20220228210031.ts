import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /* valores del formulario */

  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    try {
      if (!form.value.email || !form.value.password)
        throw 'Uno o mas campos estan vacios';



    } catch (error) {
      alert(error);
      return
    }
  }
}
