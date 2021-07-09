import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colors = [
  "white", 
  "#f28b82",
  "#fbbc04",
  "#fff475",
  "#ccff90",
  "#a7ffeb",
  "#cbf0f8",
  "#aecbfa",
  "#d7aefb",
  "#fdcfe8",
  "#e6c9a8",
  "#e8eaed"]

  @Output() messageEvent = new EventEmitter<string>();
  sendColor(color:any){
    this.messageEvent.emit(color)
    // console.log(color)
  }
}
