import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<UpdatenoteComponent>,
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
    console.log("close-dialog")
    this.dialogRef.close();
  }
}
