import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /* valores del formulario */

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    try {
      if (!form.value.email || !form.value.password)
        throw 'Uno o mas campos estan vacios';

      this.userService.login(form.value).subscribe((data: any) => {
        this.router.navigate(['/home']);
        localStorage.setItem('auth_token', data.token);
      },
      (err) => console.log(err));
    } catch (error) {
      alert(error);
      return;
    }
  }
}
