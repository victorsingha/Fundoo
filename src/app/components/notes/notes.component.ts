import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {


  constructor(private http:HttpClient) { }
  
  //DATA Transfer from TakeNote to Notes
  note: any;
  receiveMessage($event: any) {
    // this.note = $event
    // console.log(this.note)
    // this.notes.push(this.note)
  }


  ngOnInit(): void {
    this.getAllNotes();
  }
//   notes = [
//     { "notesId":1, "title": "hello111 111111111111111 222222222 3333333333333", "body": "Available1" },
//     { "notesId":2, "title": "hello2", "body": "Available2" },
//     { "notesId":3, "title": "hello3", "body": "Take the bag of rice and send to Ben. Take the bag of rice and send to Ben." },
//     { "notesId":4, "title": "hello4", "body": "Available4" },
//     { "notesId":5, "title": "hello5", "body": "Available5" },
//     { "notesId":6, "title": "hello6", "body": "Take the bag of rice and send to Ben. Take the bag of rice and send to Ben.Take the bag of rice and send to Ben. Take the bag of rice and send to Ben." },
//     { "notesId":7, "title": "hello7", "body": "Available7" },
//     { "notesId":8, "title": "hello8", "body": "Available8" },
// ];

notes:any;
token: any;
getAllNotes(){
  this.token = localStorage.getItem("token");
  const headers= new HttpHeaders()
  .append('content-type', 'application/json')
  .append('Access-Control-Allow-Origin', '*')
  .append('Authorization',`Bearer ${this.token}`);
  this.http
      .get("https://localhost:44354/api/notes/list",{ 'headers': headers })
      .subscribe(res=>{
        console.log(res);
        this.notes = res;
      })  
}
}
