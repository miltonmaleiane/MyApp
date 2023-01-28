import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuthenticated:boolean = false;
isLoading: Boolean = false
  constructor(private router:Router) {}
    login(form: LoginForm){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          // Signed in 
          this.router.navigate([''])
          this.isAuthenticated = true
          alert("Login works")
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          this.isAuthenticated = false
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Wrong credentials")
        }).finally(() => (this.isLoading = false))

     }
  passwordMatched: boolean = true 
    register(forms: RegisterForm){ 
      if (this.isLoading) return;
      this.isLoading = true;
      if (forms.password != forms.cpassword) {
        this.passwordMatched = false 
        return;
      }
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, forms.email, forms.password)
        .then((userCredential) => {
          this.isAuthenticated = true
          console.log(userCredential)
        })
        .catch((error) => {
          this.isAuthenticated = false
          const errorCode = error.code;
          const errorMessage = error.message;
   
          // ..
        }).finally(() => (this.isLoading = false));
    }
   logout(){
     const auth = getAuth();
     signOut(auth).then(() => {
       // Sign-out successful.
       this.router.navigate(['login']); 
       this.isAuthenticated= false
     }).catch((error) => {
       // An error happened.
     });
   }
}
