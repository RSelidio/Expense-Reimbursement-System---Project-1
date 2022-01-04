import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfo } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:7777/api/reimbursements";


  constructor(private http: HttpClient) { }


    getAllUsers(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.baseUrl+"/Users/GetAll");
    }

    getAUsers(userId: number): Observable<UserInfo> {
      return this.http.get<UserInfo>(this.baseUrl+"/Users"+userId);
      }

  //  validateUser(userinfo: UserInfo): Observable<UserInfo>{
  //    return this.http.post<UserInfo>(this.baseUrl+"/Login", userinfo);
  //  }

  updateUser(updateUser: UserInfo): Observable<UserInfo>{
    return this.http.put<UserInfo>(this.baseUrl+"/user/update/"+updateUser.user_id, updateUser);
  }
  validateUser(existingUser: UserInfo): Observable<UserInfo>{
    return this.http.post<UserInfo>(this.baseUrl+"/Login", existingUser);
  }

  // validateUser(userinfo: UserInfo){
  //   // consume endpoint to validate the user


    
  //   if(userinfo.username == "Manager" && userinfo.user_password == "admin"){
  //     userinfo.user_id = 1;
  //     userinfo.user_type = "manager";
  //     userinfo.user_address = "Atlanta";
  //   } else if(userinfo.username == "Employee" && userinfo.user_password == "emp"){
  //     userinfo.user_id = 2;
  //     userinfo.user_type = "employee";
  //     userinfo.user_address = "Marietta";
  //   } 
  //   return userinfo;
  // }

}

