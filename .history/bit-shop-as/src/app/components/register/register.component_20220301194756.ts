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
    const { name, phone, username, email, password, confirmPassword } =
      form.value;
    console.log(form.value);

    if (!phone || !username || !email || !password || !confirmPassword)
      return Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Uno o mas campos estan vacios',
        showConfirmButton: true,
      });

    if (password !== confirmPassword) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Las contraseñas no coinciden',
        showConfirmButton: true,
      });

      this.userService.slectedUser.password = ""
      this.userService.slectedUser.confirmPassword = ""
      return
    }

    this.userService.register({email, password, username, phone}).subscribe(
      (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: `Usuario creado correctamente`,
          showConfirmButton: true,
        });
      }
    )

    return;
  }
}
