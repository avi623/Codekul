import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  color: string;
  fntSiz : number = 3;
  constructor() { }

  ngOnInit() {
  }

  btnClick(color: string) {
    this.color = color;
  }

  enlarge() {
    this.fntSiz = 6;
  }

  crunch() {
    this.fntSiz = 3;
  }
}