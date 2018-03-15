import { Component, OnInit } from '@angular/core';
import { User } from '../../server/models/user';
import { UserService } from '../../server/controllers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = new User();
  userLoggedIn : User;
  registrationErrors: string [] = [];
  loginErrors: string [] = [];

  constructor(
    private _uS : UserService,
    private _r  : Router
  ) {

  }

  ngOnInit() {
  }

  createUser(){
    this.registrationErrors = [];
    this._uS.create(this.newUser, (res) => {
      if(res.errors){
        for (const key of Object.keys(res.errors)){
          const error = res.errors[key];
          this.registrationErrors.push(error.message)
        }
      }
      else {
        this._r.navigateByUrl('/dashboard');
      }
    })
  }

}
