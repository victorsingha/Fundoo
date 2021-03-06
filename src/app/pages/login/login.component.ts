import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;

  constructor(private router: Router,private userservice: UserService,private http: HttpClient,private _snackBar: MatSnackBar) {}
  
  btnForgotPassword(){
    this.router.navigateByUrl('/forgotpassword');
  }
  btnCreateAccount(){
    this.router.navigateByUrl('/register');
    
  }
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };
  response:any = null;
  btnLogin(){
    if(this.loginForm.valid){ 
      this.loading = true;
        //this.userservice.login(this.loginForm.value).subscribe(res=>{console.log(res)})
        // this.router.navigateByUrl('/dashboard/notes');
        // console.log(this.loginForm.value)
       
        // const headers= new HttpHeaders()
        // .append('content-type', 'application/json')
        // .append('Access-Control-Allow-Origin', '*');
        // this.http
        //     .post("https://localhost:44354/api/users/login", this.loginForm.value,{ 'headers': headers })
        //     .subscribe(res=>{console.log(res)})
            this.http
            .post("https://localhost:44354/api/users/login", this.loginForm.value)
            .subscribe(res=>{        
              this.response = res
              if(this.response.success == true){
               localStorage.setItem("token",this.response.token)
               console.log("Saved Token: ",localStorage.getItem("token"))
               this.loading = false;
                this.router.navigateByUrl('/dashboard/notes');
                console.log("success")            
              }
            },(error)=>{
              this.loading = false;
              this._snackBar.open('Wrong Credentials!','OK',{ duration: 3000 });
              if(error.status == 401){
                console.log("invalid username or password")
              }
            })
           
      }
    
  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
  });

  ngOnInit(): void {
  }

}
