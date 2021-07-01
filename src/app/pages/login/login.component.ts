import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}
  btnForgotPassword(){
    this.router.navigateByUrl('/forgotpassword');
  }
  btnCreateAccount(){
    this.router.navigateByUrl('/');
  }
  btnLogin(){
    // console.log(this.loginForm.value)
    // console.log(`isInputsEmpty: ${this.isInputsEmpty()}`)
    if(this.loginForm.valid && !this.isInputsEmpty()){
        console.log("POST")  
    }
    
  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
  });

  ngOnInit(): void {
  }

  isInputsEmpty(){
    if(
       this.loginForm.value.email &&
       this.loginForm.value.password != ""
      )
      {
        return false;
      }
      return true;
  }

}
