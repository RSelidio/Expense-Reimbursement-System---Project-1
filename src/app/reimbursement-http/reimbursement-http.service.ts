import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement, ReimbursementNotif } from './reimbursement-http.model';
import { Reimbursement2 } from './reimbursement-http.model';
import { UserInfo } from './reimbursement-http.model';
@Injectable({
  providedIn: 'root'
})
export class ReimbursementHttpService {
 baseUrl = "http://localhost:7777/api/reimbursements";
  constructor(private http: HttpClient) { }

  getAllReimbursementService(): Observable<Reimbursement2[]> {
  return this.http.get<Reimbursement2[]>(this.baseUrl);
  }
  getAUsers(userId: number): Observable<UserInfo> {
    return this.http.get<UserInfo>(this.baseUrl+"/Users"+userId);
    }
  getAllUsers(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.baseUrl+"/Users/GetAll");
    }

  addReimbursementService(newReimbursement: Reimbursement): Observable<Reimbursement> {
    return this.http.post<Reimbursement>(this.baseUrl+"/add/", newReimbursement);
  }
  
  removeReimbursementService(reimbursementsId: number): Observable<Reimbursement> {
    return this.http.delete<Reimbursement>(this.baseUrl+"/"+reimbursementsId);
  
  }
  getAreimbursementService(reimbursementsId: number): Observable<ReimbursementNotif>{
    return this.http.get<ReimbursementNotif>(this.baseUrl+"/"+reimbursementsId);
  }
  getAreimbursementServiceNotif(reimbursementsId: number): Observable<ReimbursementNotif>{
    return this.http.get<ReimbursementNotif>(this.baseUrl+"/"+reimbursementsId);
  }
  getANotification(reimbursementsId: any): Observable<ReimbursementNotif>{
    return this.http.get<ReimbursementNotif>(this.baseUrl+"/add/notification/"+reimbursementsId);
  }
  updateReimbursementService(updatereimbursement: Reimbursement): Observable<Reimbursement2>{
    return this.http.put<Reimbursement2>(this.baseUrl+"/"+updatereimbursement.rb_id, updatereimbursement);
  }
  sendNotification(updatereimbursement: ReimbursementNotif): Observable<ReimbursementNotif>{
    return this.http.put<ReimbursementNotif>(this.baseUrl+"/add/notification/"+updatereimbursement.rb_id, updatereimbursement);
  }

  approveReimbursementService(approvereimbursement: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.baseUrl+"/approve"+"/"+approvereimbursement.rb_id, approvereimbursement);
  }

  acceptedReimbursementService(userinfo: UserInfo): Observable<Reimbursement2[]> {
    return this.http.get<Reimbursement2[]>(this.baseUrl+"/employee/approved/"+userinfo.user_id);
    }
    
  allacceptedReimbursementService(): Observable<Reimbursement2[]> {
    return this.http.get<Reimbursement2[]>(this.baseUrl+"/showall/approved");
    }
  
    getAllUserPending(userId: number): Observable<ReimbursementNotif[]> {
      return this.http.get<ReimbursementNotif[]>(this.baseUrl+"/userID/"+userId);
      }

}