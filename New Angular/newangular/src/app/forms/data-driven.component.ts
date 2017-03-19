import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  private myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      userName: ['codekul'],
      email: ['getin@codekul.com'],
      password: ['123']
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.myForm);
  }
}