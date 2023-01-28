import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  submit() {
    console.log(this.forms)
  }
  forms: RegisterForm = {
    email: '',
    password: '',
    cpassword: '',


  }
}