import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserService } from './services/userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  

  constructor (private userService :UserService, private router :Router){

  }

  canActivate(){

    if(this.userService.loggedIn() && this.userService.isAdmin()){
      return true
    }

    this.router.navigate(['/home'])
    return false
  }
  
}
