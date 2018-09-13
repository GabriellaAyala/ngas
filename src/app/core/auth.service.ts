import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user;
  constructor(private afAuth: AngularFireAuth, 
              private afs: AngularFirestore) { 
    this.user = afAuth.user;  
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      credential => {
        console.log("signed in ", credential);
      }
    ).catch(
      (err) => {
        console.log("Error: ", err);
      }
    )
  }

  logout() {
    this.afAuth.auth.signOut();
    console.log("logged out");
  }
}
