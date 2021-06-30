import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  btnSubmit(){
    console.log(this.resetpasswordForm.value)
    this.router.navigateByUrl('/login');
  }
  resetpasswordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.min(3)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.min(3)]),
  });
  hide = true;

}
