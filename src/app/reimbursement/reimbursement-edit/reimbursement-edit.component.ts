import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-reimbursement-edit',
  templateUrl: './reimbursement-edit.component.html',
  styleUrls: ['./reimbursement-edit.component.css']
})
export class ReimbursementEditComponent implements OnInit {

  updatereimbursement = {
    rb_id: 0,
    mgr_id: 0,
    emp_id: 0,
    rb_date: "",
    rb_amount: 0,
    rb_status: false,
    remove_rb: false,
  }


  constructor(private reimbursementService: ReimbursementService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    var receivedReimbursementsId: any = this.activatedRoute.snapshot.paramMap.get("sentReimbursementsID");
    this.updatereimbursement = this.reimbursementService.getAreimbursementService(receivedReimbursementsId);
  }
  editreimbursement(){
    this.reimbursementService.updateReimbursementService(this.updatereimbursement);
    this.router.navigate(['reimbursementlist'])
  }
}
