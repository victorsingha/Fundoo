import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {

  constructor() { }

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
}
