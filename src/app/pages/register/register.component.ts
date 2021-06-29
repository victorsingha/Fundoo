import { Component, OnInit } from '@angular/core';
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
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    
  }

}
