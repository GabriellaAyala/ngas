import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { ApprenticeDashComponent } from './apprentice-dash/apprentice-dash.component';
import { SupervisorDashComponent } from './supervisor-dash/supervisor-dash.component';
import { ReportComponent } from './report/report.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from '../environments/environment';

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
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
