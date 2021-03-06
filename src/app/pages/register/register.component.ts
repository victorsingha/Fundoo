import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core/error/error-options';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    // console.log("control invalid",control?.invalid)
    // console.log("parent dirty",control?.parent?.dirty)
    // console.log(form?.control.get('confirmpassword')?.value)
    console.log(form)
    
    if(form?.control.get('confirmpassword')?.value == form?.control.get('password')?.value) return false;
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
  constructor(private router: Router,private userservice: UserService,private formBuilder: FormBuilder,private http:HttpClient) {}

  btnSignin() {
    this.router.navigateByUrl('/login');
  };
  
  btnRegister(){
    // this.router.navigateByUrl('/login');
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      // TODO 
      // this.userservice.registration(this.registerForm.value).subscribe(data=>{console.log(data)})
      const body = { 
        FirstName: this.registerForm.value.firstname,
        LastName:this.registerForm.value.lasttname,
        Email: this.registerForm.value.email,
        Password: this.registerForm.value.password
      }
      this.registerUser(body);
    }
  }
  
  ngOnInit(): void {}

  registerForm = this.formBuilder.group({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.min(3)]),
    confirmpassword: new FormControl(null, [Validators.required, Validators.min(3)]),
  },{ validators: this.checkPasswords });
  
  hide = true;

  checkPasswords(control: AbstractControl): ValidationErrors | null { // here we have the 'passwords' group
    const pass = control.get('password')?.value;
    const confirmPass = control.get('confirmpassword')?.value;
    return pass === confirmPass ? null : { notSame: true }     
  }
  loading = false;
  response:any;
  registerUser(body:any){
    this.loading=true;
    this.http.post("https://localhost:44354/api/users/register",body)
    .subscribe(res=>{        
      this.response = res
      if(this.response.success == true){
       this.loading = false;
        this.router.navigateByUrl('/login');
        console.log("success")            
      }
    },(error)=>{
      this.loading = false;
      if(error.status == 401){
        console.log("invalid username or password")
      }
    })

  }

}
