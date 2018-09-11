import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { ApprenticeDashComponent } from './apprentice-dash/apprentice-dash.component';
import { SupervisorDashComponent } from './supervisor-dash/supervisor-dash.component';
import { ReportComponent } from './report/report.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApprenticeDashComponent,
    SupervisorDashComponent,
    ReportComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
