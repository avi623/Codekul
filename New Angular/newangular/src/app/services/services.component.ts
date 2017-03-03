import { FbService } from './fb.service';
import { Device, ProducerService } from './producer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
  // providers : [ProducerService]
})
export class ServicesComponent implements OnInit {

  //proSer: ProducerService;
  instaUrl : string;
  fbBadge : string;

  constructor(
    private proSer: ProducerService,
    private fb : FbService
  ) {
    //this.proSer = new ProducerService();
  }

  ngOnInit() {
  }

  newDevice(name: string, price: number) {
    let dev: Device = new Device();
    dev.name = name;
    dev.price = price;
    this.proSer.newDevice(dev);
  }

  getAllDevices() {
    return this.proSer.allDevice();
  }

  show(){
    this.fbBadge = this.fb.socialDetails()[0];
    this.instaUrl = this.fb.socialDetails()[1];
  }
}