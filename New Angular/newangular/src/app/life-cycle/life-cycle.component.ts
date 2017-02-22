import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() myName: string;
  
  constructor() { }

  ngOnInit() {  this.l(`ngOnInit`);}

  ngOnChanges() {  this.l(`ngOnChanges`); }

  ngDoCheck() { this.l(`ngDoCheck`); }

  ngAfterContentInit() { this.l(`ngAfterContentInit`);}

  ngAfterContentChecked() {this.l(`ngAfterContentChecked`); }

  ngAfterViewInit() {this.l(`ngAfterViewInit`); }

  ngAfterViewChecked() {this.l(`ngAfterViewChecked`); }

  ngOnDestroy() {this.l(`ngOnDestroy`); }

  l(msg : string){
    console.log(msg);
  }
}