import {
  Input,
  Directive,
  ElementRef,
  Renderer,
  HostListener,
  HostBinding,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective implements OnInit {

  @Input('appSizer') preSize: number;

  @HostBinding('style.width') width: string;

  @HostListener('mouseleave') mouseLeave() {
    this.width = this.preSize + 'px';
  }
  @HostListener('mouseenter') mouseEnter() {
    this.width = '400px';
  }
  constructor(
    private elRef: ElementRef,
    private rend: Renderer
  ) {

  }
  ngOnInit() {
    this.width = this.preSize + 'px';
  }
}