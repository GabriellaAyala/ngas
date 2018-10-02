import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ReportComponent } from './report/report.component';
import { ApprenticeDashComponent } from './apprentice-dash/apprentice-dash.component';
import { SupervisorDashComponent } from './supervisor-dash/supervisor-dash.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';


const routes: Routes = [
  {path : '', redirectTo: 'apprentice-dashboard', pathMatch: 'full'},
  {path : 'login', component: LoginComponent},
  {path : 'report', component: ReportComponent},
  {path : 'apprentice-dashboard', component: ApprenticeDashComponent},
  {path : 'supervisor-dashboard', component: SupervisorDashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
