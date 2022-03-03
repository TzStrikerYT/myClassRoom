import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  register(form: NgForm) {
    const { name, phone, username, email } = form.value;

    if (!name || !phone || !username || !email)
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Uno o mas campos estan vacios',
        showConfirmButton: true,
      });

      return
  }
}
