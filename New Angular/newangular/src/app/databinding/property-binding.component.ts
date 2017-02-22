import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  btnOkay = 'Okay';
  inputType = 'button';
  blueBorder = '1px solid blue';
  alertInfo = 'well';
  constructor() { }
}