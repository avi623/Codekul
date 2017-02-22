import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective {

  constructor(
    private elRef: ElementRef,
    private rend: Renderer
  ) {
    //this.elRef.nativeElement.style.width = '300px';
    this.rend.setElementStyle(this.elRef.nativeElement, 'width', '300px');
  }

  @HostBinding('style.width') set width(width) {
    this.rend.setElementStyle(this.elRef.nativeElement, 'width', width);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.width = '100px';
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.width = '300px';
  }
}