import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { LoginService } from '../../services/login/login.service'
//import { User } from '../../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) {
    
  }

  ngOnInit(): void {
  }

  login(form: NgForm){
    console.log(form.value)
  }

}
