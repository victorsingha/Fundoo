import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TakenoteComponent } from '../takenote/takenote.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {


  constructor(private http:HttpClient) { }
  note: any;
  receiveMessage($event: any) {
    this.note = $event
    console.log(this.note)
    this.notes.push(this.note)
  }
  // notes:any;

  ngOnInit(): void {
    //  this.getAllNotes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InN1cC5waWNraXR1cEBnbWFpbC5jb20iLCJVc2VySUQiOiIxMCIsIm5iZiI6MTYyNTcxNjg0NCwiZXhwIjoxNjI1NzIwNDQ0LCJpYXQiOjE2MjU3MTY4NDR9.9GVVcrT0v6agm4MU_OrASKBSt3Gq1k7hsrd3bItGIqM")
    //  .subscribe(res=>{
    //    console.log(res);
    //    this.notes = res;
    //   })
  }
  notes: { title: string, body: string }[] = [
    { "title": "hello111 111111111111111 222222222 3333333333333", "body": "Available1" },
    { "title": "hello2", "body": "Available2" },
    { "title": "hello3", "body": "Take the bag of rice and send to Ben. Take the bag of rice and send to Ben." },
    { "title": "hello4", "body": "Available4" },
    { "title": "hello5", "body": "Available5" },
    { "title": "hello6", "body": "Take the bag of rice and send to Ben. Take the bag of rice and send to Ben.Take the bag of rice and send to Ben. Take the bag of rice and send to Ben." },
    { "title": "hello7", "body": "Available7" },
    { "title": "hello8", "body": "Available8" },
];


// getAllNotes(auth_token: string){
//   const headers= new HttpHeaders()
//   .append('content-type', 'application/json')
//   .append('Access-Control-Allow-Origin', '*')
//   .append('Authorization',`Bearer ${auth_token}`);
//   return this.http
//       .get("https://localhost:44354/api/notes/list",{ 'headers': headers })  
// }
}
