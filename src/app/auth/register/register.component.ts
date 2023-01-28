import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  isLoading: Boolean = false
  passwordMatched: boolean = true
  submit() {
    if (this.isLoading) return;
    this.isLoading = true;
    if(this.forms.password != this.forms.cpassword){
      this.passwordMatched = false
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.forms.email, this.forms.password)
      .then((userCredential) => {
        console.log(userCredential )
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(() => (this.isLoading = false));


  }
  forms: RegisterForm = {
    email: '',
    password: '',
    cpassword: '',


  }
}