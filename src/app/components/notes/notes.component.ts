import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  notes: { title: string, body: string }[] = [
    { "title": "hello1", "body": "Available1" },
    { "title": "hello2", "body": "Available2" },
    { "title": "hello3", "body": "Take the bag of rice and send to Ben. Take the bag of rice and send to Ben." },
    { "title": "hello4", "body": "Available4" },
    { "title": "hello5", "body": "Available5" },
    { "title": "hello6", "body": "Take the bag of rice and send to Ben. Take the bag of rice and send to Ben.Take the bag of rice and send to Ben. Take the bag of rice and send to Ben." },
    { "title": "hello7", "body": "Available7" },
    { "title": "hello8", "body": "Available8" },

];
}
