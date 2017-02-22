import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-image-presenter',
  templateUrl: './image-presenter.component.html',
  styleUrls: ['./image-presenter.component.css']
})
export class ImagePresenterComponent implements OnInit, OnChanges {

  @Input() vehicle: string;
  constructor() {
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
    console.log(`Image presenter ${this.vehicle}`);
    
    if (this.vehicle === 'bus') {
      this.vehicle = 'http://corp-content.tatamotors.com.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2015/09/buses-gallery04.jpg';
    }
    else if (this.vehicle === 'chopper') {
      this.vehicle = 'http://i1.mirror.co.uk/incoming/article2999386.ece/ALTERNATES/s615b/US-Pave-Hawk-Helicopter.jpg';
    }
    else {
      this.vehicle = 'http://www.newsread.in/wp-content/uploads/2016/07/Bike-2.jpg';
    }
  }
}