import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-blender',
  templateUrl: './blender.component.html',
  styleUrls: ['./blender.component.css']
})
export class BlenderComponent implements OnInit {

  // @Input('col') blend : string;
  
  @Input() blend : string;

  constructor() { }

  ngOnInit() {
  }

}