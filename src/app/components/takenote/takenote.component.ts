import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private http:HttpClient,private router: Router) { }
noteForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.noteForm = new FormGroup({
      Title: new FormControl(null),
      Body: new FormControl(null),
      Reminder: new FormControl("default"),
      Color: new FormControl("#FFFFFF"),
      isArchived: new FormControl(false),
      isTrash: new FormControl(false),
      isPin: new FormControl(false),
      UserId: new FormControl(0)
    });
  }
  
  response:any;
  token:any;
  
  close(){
    // console.log(this.noteForm?.value)
    if(this.noteForm.value.Title != null && this.noteForm.value.Body != null)
    {
      if(this.noteForm.value.Title.trim() != "" && this.noteForm.value.Body.trim() != "")
      {
        this.addNote();
      }
    }
            
    //DATA Transfer from TakeNote to Notes
    this.messageEvent.emit(this.noteForm?.value)
  }

  addNote(){
    this.token = localStorage.getItem("token");
    const headers= new HttpHeaders()
    .append('Authorization',`Bearer ${this.token}`);
    this.http
            .post("https://localhost:44354/api/notes/add", this.noteForm?.value,{ 'headers': headers })
            .subscribe(res=>{        
              this.response = res
              if(this.response.success == true){         
                console.log("Note Inserted") 
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
