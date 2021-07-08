import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  noteForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    body: new FormControl(null),
    reminder: new FormControl(null),
    color: new FormControl("#FFFFFF"),
    isArchived: new FormControl("false"),
    isTrash: new FormControl("false"),
    isPin: new FormControl("false"),
    userId: new FormControl(null)
  });
  close(){
    // console.log("close")
    // console.log(this.noteForm.value)
    this.messageEvent.emit(this.noteForm.value)
  }

}
