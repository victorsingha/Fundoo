import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

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
  close(){
    console.log("close")
    console.log(this.noteForm.value)
  }

}
