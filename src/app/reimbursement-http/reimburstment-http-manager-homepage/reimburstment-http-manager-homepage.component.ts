import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';
import { Reimbursement, UserInfo } from '../reimbursement-http.model';
import { ReimbursementHttpService } from '../reimbursement-http.service';



@Component({
  selector: 'app-reimburstment-http-manager-homepage',
  templateUrl: './reimburstment-http-manager-homepage.component.html',
})

export class ReimburstmentHttpManagerHomepageComponent implements OnInit {
  flag: boolean = false;

  allreimbursement: Reimbursement[] = [];
  newreimbursement: Reimbursement = {
    rb_id: 0,
    user_id: 0,
    rb_date: "",
    rb_amount: 0,
    rb_status: false,
    rb_removed: false,
    
    
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

  constructor(private reimbursementHttpSerivce: ReimbursementHttpService,
                private auth:AuthService,
                private activatedRoute: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {
    this.userInfo = this.auth.retrieveUser();

    this.loadReimbursement();
  }

  loadReimbursement(){
    this.reimbursementHttpSerivce.getAllReimbursementService().subscribe(
      (response)=>{
       console.log(response);
       this.allreimbursement = response;
      },
      (error)=>{
       console.log(error);
      }
    );
  }
  addReimbursement() {
    this.reimbursementHttpSerivce.addReimbursementService(this.newreimbursement).subscribe(
      (response) => {
        console.log(response);
        
        this.loadReimbursement();
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
