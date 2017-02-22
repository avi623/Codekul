import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  @Output() clk : EventEmitter<string>;

  constructor() { 
    this.clk = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  btnClick() {
    this.clk.emit('codekul.com');
  }
}