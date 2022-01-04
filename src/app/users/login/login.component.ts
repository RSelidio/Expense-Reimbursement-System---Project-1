import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserInfo } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: UserInfo = new UserInfo();

  // userName = "";
  // password = "";

  constructor(private userService: UserService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  validateLogin() {
    this.userService.validateUser(this.newUser).subscribe(
      (response) => {
        console.log(response);
        if (response.user_type != "") {
          this.authService.storeUser(response);
          this.authService.isLoggedIn = true;
        
          if (response.user_type == "employee") {
            this.router.navigate(['reimbursementlist-http-employee-homepage'])
          } else if (response.user_type == "manager") {
            this.router.navigate(['reimbursementlist-http-manager-homepage']);
          }
        
        } 
      });
  }
}



