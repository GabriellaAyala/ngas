import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { ApprenticeDashComponent } from './apprentice-dash/apprentice-dash.component';
import { SupervisorDashComponent } from './supervisor-dash/supervisor-dash.component';
import { ReportComponent } from './report/report.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ChatBoxComponent } from './chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApprenticeDashComponent,
    SupervisorDashComponent,
    ReportComponent,
    NavbarComponent,
    ChatBoxComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    CoreModule,
     AngularFirestoreModule,
   AngularFireModule.initializeApp(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
