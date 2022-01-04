import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimbursement } from '../reimbursement-http.model';
import { ReimbursementHttpService } from '../reimbursement-http.service';



@Component({
  selector: 'app-reimbursement-edit-http',
  templateUrl: './reimbursement-edit-http.component.html',
  styleUrls: ['./reimbursement-edit-http.component.css']
})
export class ReimbursementEditHttpComponent implements OnInit {

  updatereimbursement = {
    rb_id: 0,
    user_id: 0,
    rb_date: "",
    rb_amount: 0,
    rb_status: false,
    rb_removed: false,
    rb_image: "",
  }


  constructor(private reimbursementHttpService: ReimbursementHttpService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    var receivedReimbursementsId: any = this.activatedRoute.snapshot.paramMap.get("sentReimbursementsID");
    console.log(receivedReimbursementsId);
    this.reimbursementHttpService.getAreimbursementService(receivedReimbursementsId).subscribe(
      (response) => {
        this.updatereimbursement = response;
      },
      (error)=> {
        console.log(error);
      }
    );
  }
  editreimbursement(){
    this.reimbursementHttpService.updateReimbursementService(this.updatereimbursement).subscribe(
      (response) => {
        this.router.navigate(['reimbursementlist-http']);
      },
      (error)=> {
        console.log(error);
      }
    );
  }
}
