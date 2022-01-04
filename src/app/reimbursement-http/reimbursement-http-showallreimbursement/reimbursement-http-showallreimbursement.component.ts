import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementService } from 'src/app/reimbursement/reimbursement.service';
import { Reimbursement2 } from '../reimbursement-http.model';
import { ReimbursementHttpService } from '../reimbursement-http.service';

@Component({
  selector: 'app-reimbursement-http-showallreimbursement',
  templateUrl: './reimbursement-http-showallreimbursement.component.html',
  styleUrls: ['./reimbursement-http-showallreimbursement.component.css']
})
export class ReimbursementHttpShowallreimbursementComponent implements OnInit {

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



  constructor(private reimbursementHttpSerivce: ReimbursementHttpService,
              private router: Router) { 
  }

  ngOnInit(): void {
    this.loadReimbursement();

  }
  loadReimbursement(){
    this.reimbursementHttpSerivce.allacceptedReimbursementService().subscribe(
      (response)=>{
       console.log(response);
       this.allreimbursement = response;
      },
      (error)=>{
       console.log(error);
      }
    );
  }
}
