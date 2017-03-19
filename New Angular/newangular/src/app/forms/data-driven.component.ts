import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  private myForm: FormGroup;

  private mobiles = [
    'android', 'apple', 'black berry', 'Windows', 'Symbian'
  ];
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        userName: ['codekul', Validators.required],
        email: ['getin@codekul.com', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      }),
      password: ['123'],
      mobile: 'android'
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.myForm);
  }
}