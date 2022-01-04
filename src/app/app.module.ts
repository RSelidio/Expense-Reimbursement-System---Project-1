import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';

import { ReimbursementListComponent } from './reimbursement/reimbursement-list/reimbursement-list.component';
import { FormsModule } from '@angular/forms';
import { ReimbursementEditComponent } from './reimbursement/reimbursement-edit/reimbursement-edit.component';
import { ReimbursementEditHttpComponent } from './reimbursement-http/reimbursement-edit-http/reimbursement-edit-http.component';
import { ReimbursementHttpManagerComponent } from './reimbursement-http/reimbursement-http-manager/reimbursement-http-manager.component';
import { LogoutComponent } from './users/logout/logout.component';
import { LoginComponent } from './users/login/login.component';
import { ReimbursementHttpManagerAllemployeesComponent } from './reimbursement-http/reimbursement-http-manager-allemployees/reimbursement-http-manager-allemployees.component';
import { ReimbursementHttpManagerRbapprovedComponent } from './reimbursement-http/reimbursement-http-manager-rbapproved/reimbursement-http-manager-rbapproved.component';
import { ReimbursementHttpManagerRbpendingComponent } from './reimbursement-http/reimbursement-http-manager-rbpending/reimbursement-http-manager-rbpending.component';
import { UsersHttpEditComponent } from './users/users-http-edit/users-http-edit.component';
import { ReimbursementHttpShowallreimbursementComponent } from './reimbursement-http/reimbursement-http-showallreimbursement/reimbursement-http-showallreimbursement.component';
import { NotificationComponent } from './reimbursement-http/notification/notification.component';
import { ShownotificationComponent } from './reimbursement-http/shownotification/shownotification.component';
import { ReimbursementListHttpComponent } from './reimbursement-http/reimbursement-list-http-employee-rbcrud/reimbursement-list-http-employee-rbcrud.component';
import { ReimburstmentHttpManagerHomepageComponent } from './reimbursement-http/reimburstment-http-manager-homepage/reimburstment-http-manager-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    LoginComponent,
    ReimbursementListComponent,
    ReimbursementEditComponent,
    ReimbursementListHttpComponent,
    ReimbursementEditHttpComponent,
    ReimbursementHttpManagerComponent,
    LogoutComponent,
    ReimbursementHttpManagerAllemployeesComponent,
    ReimbursementHttpManagerRbapprovedComponent,
    ReimbursementHttpManagerRbpendingComponent,
    ReimburstmentHttpManagerHomepageComponent,
    UsersHttpEditComponent,
    ReimbursementHttpShowallreimbursementComponent,
    NotificationComponent,
    ShownotificationComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
