import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  user;
  authSubscription;

  constructor(private authService : AuthService) { 
    this.authSubscription = this.authService.user.subscribe(
      user => {
        this.user = user; 
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onLogin(form : NgForm) {
    this.authService.login(form.value.email, form.value.password);
    form.reset();
  }

  onLogout(){
    this.authService.logout();
  }

}
