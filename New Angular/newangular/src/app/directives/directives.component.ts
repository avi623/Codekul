import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  borderStyle = {
    border: '1px solid red'
  };

  fruits = [
    'Mango', 'Jack fruit', 'Banana', 'Water Malon'
  ];

  shouldShow = false;

  constructor() { }

  ngOnInit() {
  }

  fruitTaste(fruit: string): string {
    console.log(fruit);
    return fruit;
  }
}