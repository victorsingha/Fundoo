import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private userservice: UserService) {}

  btnSignin() {
    this.router.navigateByUrl('/login');
  };
  btnRegister(){
    // this.router.navigateByUrl('/login');
    if(this.registerForm.valid && this.isPasswordSame()){
      console.log("POST")
      // TODO 
      this.userservice.registration(this.registerForm.value).subscribe(data=>{console.log(data)})
    
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
  isPasswordSame(){
    if(this.registerForm.value.password == this.registerForm.value.confirmpassword) return true;
    return false;
  }

}
