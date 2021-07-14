import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  constructor(private router: Router,private http: HttpClient, public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    updateForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    console.log(this.data)
    this.updateForm = new FormGroup({
      NotesId:new FormControl(this.data.notesId),
      Title: new FormControl(this.data.title),
      Body: new FormControl(this.data.body),
      Reminder: new FormControl("default"),
      Color: new FormControl("white"),
      isArchived: new FormControl(false),
      isTrash: new FormControl(false),
      isPin: new FormControl(false),
      UserId: new FormControl(0)
    });
  }
  close(){
    // console.log("close-dialog")
    this.updateTitle(this.updateForm.value.Title,this.data.notesId)
    this.updateBody(this.updateForm.value.Body,this.data.notesId)
    this.dialogRef.close();
  }
  response:any;
  token:any;
  updateTitle(title:any,notesId: number){
    this.token = localStorage.getItem("token");
    const headers= new HttpHeaders()
    .append('Authorization',`Bearer ${this.token}`);
    this.http
            .put(`https://localhost:44354/api/notes/title/${notesId}`, { Title:`${title}` },{ 'headers': headers })
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
  updateBody(body:any,notesId: number){
    this.token = localStorage.getItem("token");
    const headers= new HttpHeaders()
    .append('Authorization',`Bearer ${this.token}`);
    this.http
            .put(`https://localhost:44354/api/notes/body/${notesId}`, { Body:`${body}` },{ 'headers': headers })
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
