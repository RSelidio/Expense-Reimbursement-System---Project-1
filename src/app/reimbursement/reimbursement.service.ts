import { Injectable } from '@angular/core';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {
  allreimbursement: Reimbursement[] = [
    {
      rb_id: 6,
      mgr_id: 1,
      emp_id: 2,
      rb_date: "November-20-2021",
      rb_amount: 430,
      rb_status: false,
      remove_rb: false
    },
    {
      rb_id: 3,
      mgr_id: 1,
      emp_id: 2,
      rb_date: "November-10-2021",
      rb_amount: 530,
      rb_status: false,
      remove_rb: false
    }
  ]
  constructor() { }

  getAllReimbursementService() {
    return this.allreimbursement;
  }

  addReimbursementService(newReimbursement: Reimbursement): void {
    this.allreimbursement.push(newReimbursement);
  }
  removeReimbursementService(reimbursementsId: number): void {
    this.allreimbursement.forEach((value, index) => {
      if (this.allreimbursement[index].rb_id == reimbursementsId) {
        this.allreimbursement.splice(index,1);
      }

    });
  }
  getAreimbursementService(reimbursementsId: number): Reimbursement{
    var sendReimbursement: Reimbursement = {
      rb_id: 0,
      mgr_id: 0,
      emp_id: 0,
      rb_date: "",
      rb_amount: 0,
      rb_status: false,
      remove_rb: false
    }

  
    this.allreimbursement.forEach((value, index) => {
      if(this.allreimbursement[index].rb_id == reimbursementsId){
        sendReimbursement = this.allreimbursement[index];
      }
    });
    return sendReimbursement;
  }
  updateReimbursementService(updatereimbursement: Reimbursement): void{
    this.allreimbursement.forEach((value, index) => {
      if(this.allreimbursement[index].rb_id == updatereimbursement.rb_id){
         this.allreimbursement[index] = updatereimbursement;
      }
    });
  }
}