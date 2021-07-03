import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  hide = true;
  btnSubmit(){
    console.log(this.resetpasswordForm.controls)
    // console.log(this.resetpasswordForm.value)
    if(this.resetpasswordForm.valid && this.isPasswordSame()){
      // POST
      this.router.navigateByUrl('/login');
    }
    
  }
  resetpasswordForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.min(3)]),
    confirmpassword: new FormControl(null, [Validators.required, Validators.min(3)]),
  }
  );

  get f (){return this.resetpasswordForm.controls}

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
  isPasswordSame(){
    if(this.resetpasswordForm.value.password == this.resetpasswordForm.value.confirmpassword)
      return true;
      return false;
    }
  }
