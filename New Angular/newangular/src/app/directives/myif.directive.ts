import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input
} from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyifDirective {

  @Input() set myIf(con: boolean) {
    if(con){
      this.vcRef.createEmbeddedView(this.temRef);
    }
    else{
      this.vcRef.clear();
    }
  }
  constructor(
    private temRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {

  }
}