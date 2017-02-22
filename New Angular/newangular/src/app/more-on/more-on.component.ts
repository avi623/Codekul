import { LoginComponent } from './../login/login.component';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-more-on',
  templateUrl: './more-on.component.html',
  styleUrls: ['./more-on.component.css']
})
export class MoreOnComponent implements OnInit {

  @ViewChild('mCity')
  mCity: ElementRef;

  city: string;
  constructor() { }

  ngOnInit() {
  }

  makeUpper(city: string) {
    console.log(this.mCity);

    this.city = city.toUpperCase();
  }

}