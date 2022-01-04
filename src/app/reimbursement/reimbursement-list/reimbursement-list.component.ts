import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-reimbursement-list',
  templateUrl: './reimbursement-list.component.html',
  styleUrls: ['./reimbursement-list.component.css']
})
export class ReimbursementListComponent implements OnInit {
  flag = false;
  allreimbursement: any = []

  newreimbursement: Reimbursement = {
    rb_id: 0,
    mgr_id: 0,
    emp_id: 0,
    rb_date: "",
    rb_amount: 0,
    rb_status: false,
    remove_rb: false
  }



  constructor(private reimbursementSerivce: ReimbursementService, private router: Router) { 
    this.reimbursementSerivce = reimbursementSerivce;
  }

  ngOnInit(): void {
    this.allreimbursement = this.reimbursementSerivce.getAllReimbursementService();
  }
  
  toggleAdd() {
    if (this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  removeReimbursement(reimbursementsId: number) {
    this.reimbursementSerivce.removeReimbursementService(reimbursementsId);
  }
  addReimbursement() {
    var myreimbursement: Reimbursement = {
      rb_id: this.allreimbursement[this.allreimbursement.length - 1].rb_id + 1,
      mgr_id: this.newreimbursement.mgr_id,
      emp_id: this.newreimbursement.emp_id,
      rb_date: this.newreimbursement.rb_date,
      rb_amount: this.newreimbursement.rb_amount,
      rb_status: false,
      remove_rb: false
    }
    this.allreimbursement.push(myreimbursement);
  }
  goToEditComponent(reimbursementsId: any){
    console.log("logged" + reimbursementsId);
    this.router.navigate(['reimbursement-edit', reimbursementsId])
  }
}
