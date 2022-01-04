import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-http-edit',
  templateUrl: './users-http-edit.component.html',
  styleUrls: ['./users-http-edit.component.css']
})
export class UsersHttpEditComponent implements OnInit {
    userInfo = {
    user_id : 0,
    username : '',
    user_password : '',
    user_fname : '',
    user_lname : '',
    user_address : '',
    user_contact : 0,
    user_type : '',
    user_removed : false,
  }
  constructor(private userService: UserService,
    private auth: AuthService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  
    this.userInfo = this.auth.retrieveUser();

  }
  editUser(){
    this.userService.updateUser(this.userInfo).subscribe(
      (response) => {
        this.router.navigate(['logout']);
      },
      (error)=> {
        console.log(error);
      }
    );
  }
}
