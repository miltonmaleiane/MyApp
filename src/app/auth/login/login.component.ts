import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LoginForm } from 'src/app/types/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService:AuthService ){}

 
  submit() {
    this.authService.login(this.form)
    
  }
form:LoginForm ={
  email: '',
  password: '',
  authService: undefined
}
isLoading(){
  return this.authService.isLoading;
}
}
