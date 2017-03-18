import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  isPassword : boolean;
  
  myForm : any = {
    userName : 'ani',
    email : 'ani@codekul.com',
    password : 'qeq34'
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    //console.log(form);
    console.log(form);
  }
}