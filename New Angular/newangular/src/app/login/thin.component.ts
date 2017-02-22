import { Component, OnInit } from '@angular/core';
//ng g c thin --flat -it -is
@Component({
  selector: 'app-thin',
  template: `
    <p>
      thin Works!
    </p>
  `,
  styles: []
})
export class ThinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}