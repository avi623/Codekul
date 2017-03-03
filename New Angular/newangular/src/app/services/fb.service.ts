import { Injectable } from '@angular/core';
import { InstaService } from './insta.service';

@Injectable()
export class FbService {

  private badge = "codekul";
  constructor(
    private insta: InstaService
  ) { }

  socialDetails() {
    return [this.badge, this.insta.url];
  }
}