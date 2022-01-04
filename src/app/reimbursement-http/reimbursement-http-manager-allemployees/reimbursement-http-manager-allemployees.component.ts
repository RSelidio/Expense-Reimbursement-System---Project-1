import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';
import { Reimbursement, Reimbursement2, UserInfo } from '../reimbursement-http.model';
import { ReimbursementHttpService } from '../reimbursement-http.service';

@Component({
  selector: 'app-reimbursement-http-manager-allemployees',
  templateUrl: './reimbursement-http-manager-allemployees.component.html',
  styleUrls: ['./reimbursement-http-manager-allemployees.component.css']
})
export class ReimbursementHttpManagerAllemployeesComponent implements OnInit {
  term: string = '';
  flag: boolean = false;
  allreimbursement: Reimbursement2[] = [];
  allusers: UserInfo[] = [];

  newreimbursement: Reimbursement = {
    rb_id: 0,
    user_id: 0,
    rb_date: "",
    rb_amount: 0,
    rb_status: false,
    rb_removed: false
  }

  userInfo: UserInfo = {
  user_id: 0,
  username: '',
  user_password: '',
  user_fname: '',
  user_lname: '',
  user_address: '',
  user_contact: 0,
  user_type: '',
  user_removed: false
} 

updatereimbursement = {
  rb_id: 0,
  user_id: 0,
  rb_date: "",
  rb_amount: 0,
  rb_status: false,
  rb_removed: false
}
  constructor(private reimbursementHttpSerivce: ReimbursementHttpService,
              private auth:AuthService,
              private router: Router) { 
  }

  ngOnInit(): void {
 
    
    this.loadUserInfo();

  }
 
  
  loadUserInfo(){
    this.reimbursementHttpSerivce.getAllUsers().subscribe(
      (response)=>{
       console.log(response);
       this.allusers = response;
      },
      (error)=>{
       console.log(error);
      }
    );
    
  }
  toggleAdd(reimbursementsuserId: any) {
    this.reimbursementHttpSerivce.getAllUserPending(reimbursementsuserId).subscribe(
      (response)=>{
       console.log(response);
       this.allreimbursement = response;
      },
      (error)=>{
       console.log(error);
      }
    );
    console.log("logged" + reimbursementsuserId);
    if (this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  // goToEditComponent(reimbursementsId: any){
  //   console.log("logged" + reimbursementsId);
  //   this.router.navigate(['reimbursement-edit-manager', reimbursementsId])
  // }

 
  
  

  
}
