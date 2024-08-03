import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private router:Router){}  

email = new FormControl("",[Validators.required,Validators.email]);
password = new FormControl("",[Validators.required,Validators.minLength(6)]);

loginform = new FormGroup({
  email:this.email,
  password:this.password
})

loginForm(){
  console.log(this.loginform);
}

resetForm(){
  this.loginform.reset();
}

goToSignup(){
 this.router.navigate(['/signup']);
}

}
