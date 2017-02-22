import {
  Component,
  OnInit,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {

  @ContentChild('tm')
  tm: ElementRef;

  constructor() { 
    this.tm.nativeElement.value = 'Okay';
  }

  ngOnInit() {
    console.log(this.tm);
  }
}