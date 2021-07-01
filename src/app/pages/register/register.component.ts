import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) {}

  btnSignin() {
    this.router.navigateByUrl('/login');
  };
  btnRegister(){
    // this.router.navigateByUrl('/login');
    // console.log(this.registerForm.value)
    console.log(`isInputsEmpty: ${this.isInputsEmpty()}`)
    console.log(`isPasswordSame: ${this.isPasswordSame()}`)
    if(!this.isInputsEmpty() && this.isPasswordSame()){
      console.log("POST")
      // TODO 
    }
  }
  
  ngOnInit(): void {

  }
  registerForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.min(3)]),
  });
  hide = true;
  // get emailInput() { return this.registerForm.get('email'); }
  // get passwordInput() { return this.registerForm.get('password'); }
  isInputsEmpty(){
    if(this.registerForm.value.firstname && 
       this.registerForm.value.lastname && 
       this.registerForm.value.email &&
       this.registerForm.value.password &&
       this.registerForm.value.confirmpassword != "")
      {
        return false;
      }
      return true;
  }
  isPasswordSame(){
    if(this.registerForm.value.password == this.registerForm.value.confirmpassword) return true;
    return false;
  }

}
