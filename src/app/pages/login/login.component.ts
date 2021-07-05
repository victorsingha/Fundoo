import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private userservice: UserService,private http: HttpClient) {}
  
  btnForgotPassword(){
    this.router.navigateByUrl('/forgotpassword');
  }
  btnCreateAccount(){
    this.router.navigateByUrl('/');
    
  }
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };

  btnLogin(){
    if(this.loginForm.valid){ 
        //this.userservice.login(this.loginForm.value).subscribe(res=>{console.log(res)})
        console.log(this.loginForm.value)
       
        const headers= new HttpHeaders()
        .append('content-type', 'application/json')
        .append('Access-Control-Allow-Origin', '*');
        this.http
            .post("https://localhost:44354/api/users/login", this.loginForm.value,{ 'headers': headers })
            .subscribe(res=>{console.log(res)})
            // this.http
            // .post("https:localhost/44354/api/users/login", this.loginForm.value)
            // .subscribe(res=>{console.log(res)})

            // this.http
            // .get("http://localhost:3000/users")
            // .subscribe(res=>{console.log(res)})
      }
    
  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
  });

  ngOnInit(): void {
  }

}
