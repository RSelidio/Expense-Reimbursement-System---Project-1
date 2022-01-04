import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReimbursementHttpService } from '../reimbursement-http.service';

@Component({
  selector: 'app-shownotification',
  templateUrl: './shownotification.component.html',
  styleUrls: ['./shownotification.component.css']
})
export class ShownotificationComponent implements OnInit {

  updatereimbursement = {
    rb_id: 0,
    user_id: 0,
    rb_date: "",
    rb_amount: 0,
    rb_status: false,
    rb_removed: false,
    rb_desc: "",
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
        this.router.navigate(['shownotification']);
      },
      (error)=> {
        console.log(error);
      }
    );
  }
}
