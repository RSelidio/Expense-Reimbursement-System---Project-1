import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';
import { Reimbursement2, ReimbursementNotif, UserInfo } from '../reimbursement-http.model';
import { ReimbursementHttpService } from '../reimbursement-http.service';


@Component({
  selector: 'app-reimbursement-list-http',
  templateUrl: './reimbursement-list-http-employee-rbcrud.component.html',
  styleUrls: ['./reimbursement-list-http-employee-rbcrud.component.css']
})
export class ReimbursementListHttpComponent implements OnInit {
  flag: boolean = false;
  popup = false
  allreimbursement: ReimbursementNotif[] = [];
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
  userInfo: UserInfo = new UserInfo();


  constructor(private reimbursementHttpSerivce: ReimbursementHttpService,
              private auth: AuthService,
              private router: Router) { 
  }

  ngOnInit(): void {
    this.userInfo = this.auth.retrieveUser();
    this.loadReimbursement();
  }
  loadReimbursement(){
    this.reimbursementHttpSerivce.getAllUserPending(this.userInfo.user_id).subscribe(
      (response)=>{
       console.log(response);
       this.allreimbursement = response;
      },
      (error)=>{
       console.log(error);
      }
    );
    
    this.reimbursementHttpSerivce.acceptedReimbursementService(this.userInfo).subscribe(
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
    this.newreimbursement.user_id = this.userInfo.user_id;
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
    this.router.navigate(['reimbursement-edit-http', reimbursementsId])
  }
 
  showNotificationComponent(reimbursementsId: any){
    this.router.navigate(['shownotification', reimbursementsId])
  }

  
  
}
