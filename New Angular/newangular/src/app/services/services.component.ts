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

  constructor(
    private proSer: ProducerService
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
}