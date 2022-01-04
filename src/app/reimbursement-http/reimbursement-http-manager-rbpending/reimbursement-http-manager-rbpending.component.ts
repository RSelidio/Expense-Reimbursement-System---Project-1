import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement, Reimbursement2, UserInfo } from '../reimbursement-http.model';
import { ReimbursementHttpService } from '../reimbursement-http.service';

@Component({
  selector: 'app-reimbursement-http-manager-rbpending',
  templateUrl: './reimbursement-http-manager-rbpending.component.html',
  styleUrls: ['./reimbursement-http-manager-rbpending.component.css']
})
export class ReimbursementHttpManagerRbpendingComponent implements OnInit {
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
  constructor(private reimbursementHttpSerivce: ReimbursementHttpService, private router: Router) { 
  }

  ngOnInit(): void {

    this.loadReimbursement();
    this.loadUserInfo();

   console.log("after calling getallbookservice()");
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
  toggleAdd() {
    if (this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  removeReimbursement(reimbursementsId: number) {
    this.reimbursementHttpSerivce.removeReimbursementService(reimbursementsId).subscribe(
      (response) => {
        console.log(response);
        this.loadReimbursement()
      },
      (error) => console.log(error)
    )
  }
  approvereimbursement(reimbursement: Reimbursement){
    this.reimbursementHttpSerivce.approveReimbursementService(reimbursement).subscribe(
      (response) => {
        this.loadReimbursement();
      },
      (error)=> {
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
  goToEditComponent(reimbursementsId: any){
    this.router.navigate(['notification', reimbursementsId])
  }
}
