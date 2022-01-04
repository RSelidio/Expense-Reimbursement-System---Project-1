import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';
import { Reimbursement2, UserInfo } from '../reimbursement-http.model';
import { ReimbursementHttpService } from '../reimbursement-http.service';

@Component({
  selector: 'app-reimbursement-http-manager-rbapproved',
  templateUrl: './reimbursement-http-manager-rbapproved.component.html',
  styleUrls: ['./reimbursement-http-manager-rbapproved.component.css']
})
export class ReimbursementHttpManagerRbapprovedComponent implements OnInit {
  flag: boolean = false;
  allreimbursement: Reimbursement2[] = [];
  acceptedreimbursement: Reimbursement2[] = [];
  newreimbursement: Reimbursement2 = {
    rb_id: 0,
    user_id: 0,
    rb_date: "",
    rb_amount: 0,
    rb_status: false,
    rb_removed: false,
    username: '',
    rb_image: '',
  }
  userinfo: UserInfo = new UserInfo();


  constructor(private reimbursementHttpSerivce: ReimbursementHttpService,
              private auth: AuthService,
              private router: Router) { 
  }

  ngOnInit(): void {
    this.userinfo = this.auth.retrieveUser();
    this.loadReimbursement();
  }
  loadReimbursement(){
    this.reimbursementHttpSerivce.acceptedReimbursementService(this.userinfo).subscribe(
      (response)=>{
       console.log(response);
       this.acceptedreimbursement = response;
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
    console.log("logged" + reimbursementsId);
    this.router.navigate(['reimbursement-edit-http', reimbursementsId])
  }
}
