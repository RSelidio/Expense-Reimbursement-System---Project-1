import { Injectable } from '@angular/core';
import { UserInfo } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  storeUser(userinfo: UserInfo){
    sessionStorage.setItem("userData", JSON.stringify(userinfo));
  }

  retrieveUser(): UserInfo{
    var data: any = sessionStorage.getItem("userData");
    return JSON.parse(data == null?'':data);
  }

  removeUser(){
    sessionStorage.removeItem("userData");
  }

  retrieveUserType(){
    var data: any = sessionStorage.getItem("userData");
    var userinfo: UserInfo = JSON.parse(data == null?'':data);
    return userinfo.user_type;
  }
  constructor() { }
}
