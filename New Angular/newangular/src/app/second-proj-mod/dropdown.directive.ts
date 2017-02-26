import { 
  Directive,
  HostBinding,
  HostListener 
} from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen : boolean;

  @HostListener('click') mouseClick() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.isOpen = false;
  }
  constructor() { }
}