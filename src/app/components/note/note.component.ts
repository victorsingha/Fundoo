import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() note: any ;
  constructor(private http:HttpClient,private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  noteForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    body: new FormControl(null),
    reminder: new FormControl(null),
    color: new FormControl(null),
    isArchived: new FormControl(null),
    isTrash: new FormControl(null),
    isPin: new FormControl(null),
    userId: new FormControl(null)
  });

  
  archive(){
    console.log(this.note.notesId)
    this.deleteNote();
  }

  token:any;
  response:any;
  deleteNote(){
      this.token = localStorage.getItem("token");
      const headers= new HttpHeaders()
      .append('Authorization',`Bearer ${this.token}`);
      this.http
              .delete(`https://localhost:44354/api/notes/delete/${this.note.notesId}`,{ 'headers': headers })
              .subscribe(res=>{        
                this.response = res
                if(this.response.success == true){         
                  console.log("Note Deleted") 
                  this.reloadCurrentRoute();       
                }
              },(error)=>{
                console.log(error)
              })          
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
opened = false;
toggleColorPallete(){
  this.opened = !this.opened
}

// bgColor : string = 'white';
color:any;
  receiveMessage($event: any) {
    this.color = $event
    // console.log(this.color)
  }

  openDialog(): void {
    // console.log(note)
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      // width: '250px',
      // data: {name: this.name, animal: this.animal}
      data: this.note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
