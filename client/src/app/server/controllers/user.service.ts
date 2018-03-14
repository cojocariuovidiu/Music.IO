import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  currentUser: User = null;

  constructor(
    private _http: Http
  ) { }

  getCurrentUser(cb){
    console.log("user.service.ts => getCurrentUser");
    this._http.get('/session').subscribe(
      res => cb(res),
      err => console.log(err)
    );
  }

  create(newUser: User, cb){
    console.log("user.service.ts => create");
    this._http.post('/user', newUser).subscribe(
      res => cb(res.json()),
      err => console.log(err)
    );
  }

  login(user: User, cb){
    console.log("user.service.ts => login");
    this._http.post('/login', user).subscribe(
      res => cb(res.json()),
      err => console.log(err)
    );
  }

  logout(){
    console.log("user.service.ts => logout");
    this._http.delete('/user').subscribe();
  }
}
