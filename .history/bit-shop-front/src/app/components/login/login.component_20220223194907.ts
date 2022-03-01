import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
//import { Login } from '../../models/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    console.log(form)
  }

}
