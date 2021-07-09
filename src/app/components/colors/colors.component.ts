import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  colors = [
  "white", 
  "#f28b82",
  "#fbbc04",
  "#fff475",
  "#ccff90",
  "#a7ffeb",
  "#cbf0f8",
  "#aecbfa",
  "#d7aefb",
  "#fdcfe8",
  "#e6c9a8",
  "#e8eaed"]

  @Output() messageEvent = new EventEmitter<string>();
  sendColor(color:any){
    this.messageEvent.emit(color)
    // console.log(color)
    this.updateColor(color)
  }


  response:any;
  token:any;
  updateColor(color:any){
    this.token = localStorage.getItem("token");
    const headers= new HttpHeaders()
    .append('Authorization',`Bearer ${this.token}`);
    this.http
            .put(`https://localhost:44354/api/notes/color/64`, { Color:`${color}` },{ 'headers': headers })
            .subscribe(res=>{        
              this.response = res
              if(this.response.success == true){         
                console.log("Color Updated") 
                this.reloadCurrentRoute();       
              }
            },(error)=>{
              console.log(error)
              if(error.status == 401){
                console.log("fail")
              }
            })          
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
}
