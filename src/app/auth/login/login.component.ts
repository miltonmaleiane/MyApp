import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LoginForm } from 'src/app/types/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
form:LoginForm ={
  email:'',
  password :''
}
}
