import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  passwordMatched: boolean = true
  submit() {
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
      });


  }
  forms: RegisterForm = {
    email: '',
    password: '',
    cpassword: '',


  }
}