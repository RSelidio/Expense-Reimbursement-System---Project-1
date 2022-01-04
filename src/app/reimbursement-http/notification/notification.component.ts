import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimbursement2 } from '../reimbursement-http.model';
import { ReimbursementHttpService } from '../reimbursement-http.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  updatereimbursement = {
    rb_id: 0,
    user_id: 0,
    rb_date: "",
    rb_amount: 0,
    rb_status: false,
    rb_removed: false,
    username: "",
    rb_desc: "",
    rb_image: "",
  }


  constructor(private reimbursementHttpService: ReimbursementHttpService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    var receivedReimbursementsId: any = this.activatedRoute.snapshot.paramMap.get("sentReimbursementsID");
    this.reimbursementHttpService.getAreimbursementServiceNotif(receivedReimbursementsId).subscribe(
      (response) => {
        this.updatereimbursement = response;
      },
      (error)=> {
        console.log(error);
      }
    );
  }
  editreimbursement(){
    this.reimbursementHttpService.sendNotification(this.updatereimbursement).subscribe(
      (response) => {
        this.router.navigate(['reimbursementlist-http-manager-pendingreimbursement']);
      },
      (error)=> {
        console.log(error);
      }
    );
  }
}
