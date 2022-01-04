import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { NotificationComponent } from './reimbursement-http/notification/notification.component';
import { ReimbursementEditHttpComponent } from './reimbursement-http/reimbursement-edit-http/reimbursement-edit-http.component';
import { ReimbursementHttpManagerAllemployeesComponent } from './reimbursement-http/reimbursement-http-manager-allemployees/reimbursement-http-manager-allemployees.component';
import { ReimbursementHttpManagerRbapprovedComponent } from './reimbursement-http/reimbursement-http-manager-rbapproved/reimbursement-http-manager-rbapproved.component';
import { ReimbursementHttpManagerRbpendingComponent } from './reimbursement-http/reimbursement-http-manager-rbpending/reimbursement-http-manager-rbpending.component';
import { ReimbursementHttpManagerComponent } from './reimbursement-http/reimbursement-http-manager/reimbursement-http-manager.component';
import { ReimbursementHttpShowallreimbursementComponent } from './reimbursement-http/reimbursement-http-showallreimbursement/reimbursement-http-showallreimbursement.component';
import { ReimbursementListHttpComponent } from './reimbursement-http/reimbursement-list-http-employee-rbcrud/reimbursement-list-http-employee-rbcrud.component';
import { ReimburstmentHttpManagerHomepageComponent } from './reimbursement-http/reimburstment-http-manager-homepage/reimburstment-http-manager-homepage.component';
import { ShownotificationComponent } from './reimbursement-http/shownotification/shownotification.component';
import { ReimbursementEditComponent } from './reimbursement/reimbursement-edit/reimbursement-edit.component';
import { ReimbursementListComponent } from './reimbursement/reimbursement-list/reimbursement-list.component';
import { AdminGuard } from './users/admin.guard.service';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { UsersHttpEditComponent } from './users/users-http-edit/users-http-edit.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'logout', component: LogoutComponent  },
  { path: 'hello', component: HelloComponent },
  { path: 'shownotification/:sentReimbursementsID', component: ShownotificationComponent , canActivate: [AdminGuard]},
  { path: 'notification/:sentReimbursementsID', component: NotificationComponent , canActivate: [AdminGuard]},
  { path: 'reimbursementlist-http-manager-rbrequest-allemployees', component: ReimbursementHttpManagerAllemployeesComponent, canActivate: [AdminGuard]},
  { path: 'reimbursementlist', component: ReimbursementListComponent , canActivate: [AdminGuard]},
  { path: 'reimbursement-edit/:sentReimbursementsID', component: ReimbursementEditComponent , canActivate: [AdminGuard]},
  { path: 'reimbursementlist-http', component: ReimbursementListHttpComponent, canActivate: [AdminGuard]},
  { path: 'reimbursementlist-http-manager-approvedreimbursement', component: ReimbursementHttpManagerRbapprovedComponent , canActivate: [AdminGuard]},
  { path: 'reimbursementlist-http-manager-pendingreimbursement', component: ReimbursementHttpManagerRbpendingComponent , canActivate: [AdminGuard]},
  { path: 'reimbursementlist-http-manager-homepage', component: ReimbursementHttpManagerComponent , canActivate: [AdminGuard]},
  { path: 'reimbursementlist-http-employee-homepage', component: ReimburstmentHttpManagerHomepageComponent, canActivate: [AdminGuard]},
  { path: 'reimbursementlist-http-employee-edit', component: UsersHttpEditComponent, canActivate: [AdminGuard]},
  { path: 'reimbursementlist-http-showall-approved', component: ReimbursementHttpShowallreimbursementComponent,canActivate: [AdminGuard]},
  { path: 'reimbursement-edit-http/:sentReimbursementsID', component: ReimbursementEditHttpComponent, canActivate: [AdminGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 