import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core/error/error-options';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  
  constructor(private router: Router,private formBuilder: FormBuilder) {
  
  }
 
  resetpasswordForm = this.formBuilder.group({
    password: new FormControl(null, [Validators.required, Validators.min(3)]),
    confirmpassword: new FormControl(null,[Validators.required, Validators.min(3)]),
  }, 
  { validators: this.checkPasswords }
  );
  hide = true;
  btnSubmit(){
    if(this.resetpasswordForm.valid){
      // POST
      // this.router.navigateByUrl('/login');
      console.log(this.resetpasswordForm.value,"yoooooooooooooo")
    }
    
  }
 

  // get f (){return this.resetpasswordForm.controls}
  ngOnInit(): void {}
//   MustMatch(controlName: string, matchingControlName: string) {
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];

//         if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//             // return if another validator has already found an error on the matchingControl
//             return;
//         }

//         // set error on matchingControl if validation fails
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ mustMatch: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }
checkPasswords(control: AbstractControl): ValidationErrors | null { // here we have the 'passwords' group
  const pass = control.get('password')?.value;
  const confirmPass = control.get('confirmpassword')?.value;
console.log(`pass=${pass} conpass=${confirmPass}`)
          // if (control.get('confirmPassword')?.errors) {
          //   // return if another validator has already found an error on the matchingControl
          //   return null;
          // }
          // if (pass !== confirmPass) {
          //   control.get('confirmPassword')?.setErrors({ notSame: true });
          
          //   } else {
          //     control.get('confirmPassword')?.setErrors(null);
             
          //   }
  return pass === confirmPass ? null : { notSame: true }     
}
  }
