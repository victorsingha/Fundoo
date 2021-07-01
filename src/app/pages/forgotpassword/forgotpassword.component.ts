import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private router: Router) {}
  btnBack(){
    this.router.navigateByUrl('/login');
  }
  btnSubmit(){
    // console.log(this.forgotPasswordForm.value)
    
    if(this.forgotPasswordForm.valid){
      // POST
      this.router.navigateByUrl('/resetpassword');
    }
  }

  ngOnInit(): void {
  }
  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });
}
