import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core/error/error-options';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router,private userservice: UserService,private formBuilder: FormBuilder) {}

  btnSignin() {
    this.router.navigateByUrl('/login');
  };
  btnRegister(){
    // this.router.navigateByUrl('/login');
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      // TODO 
      this.userservice.registration(this.registerForm.value).subscribe(data=>{console.log(data)})
    
    }
  }
  
  ngOnInit(): void {

  }
  registerForm = this.formBuilder.group({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.min(3)]),
    confirmpassword: new FormControl(null, [Validators.required, Validators.min(3)]),
  },{ validators: this.checkPasswords });
  hide = true;

  checkPasswords(control: AbstractControl): ValidationErrors | null { // here we have the 'passwords' group
    const pass = control.get('password')?.value;
    const confirmPass = control.get('confirmpassword')?.value;
    console.log(`pass=${pass} conpass=${confirmPass}`)
    return pass === confirmPass ? null : { notSame: true }     
  }

}
