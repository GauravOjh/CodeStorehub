import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  email = new FormControl("",[Validators.required,Validators.email]);
password = new FormControl("",[Validators.required,Validators.minLength(6)]);

signupform = new FormGroup({
  email:this.email,
  password:this.password
})

signupForm(){

}

resetForm(){
  this.signupform.reset();
}

}
