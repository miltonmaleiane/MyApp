import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LoginForm } from 'src/app/types/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  isLoading:Boolean =false
 
  submit() {
    if (this.isLoading)  return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
        alert("Login works")
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Wrong credentials")
      }).finally(() => (this.isLoading=false))

  }
form:LoginForm ={
  email:'',
  password :''

 
}
}
