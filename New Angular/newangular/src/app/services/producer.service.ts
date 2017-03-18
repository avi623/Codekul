import { ChildComponent } from './child.component';
import { MessageListener } from './producer.service';
import { EventEmitter, Injectable } from '@angular/core';

export class Device {
  name: string;
  price: number;
}

export interface MessageListener {
  onMessage(msg : string) : void;
}

@Injectable()
export class ProducerService {

  private devices: any = [];
  private emitter: EventEmitter<string>;

  constructor() {
    this.emitter = new EventEmitter<string>();
  }

  newDevice(device: Device) {
    this.devices.push(device);
  }

  allDevice() {
    return this.devices;
  }

  publish(str: string) {
    this.emitter.emit(str);
  }

  subscribePlane(callBack : any) {
    this.emitter.subscribe(callBack);
  }

  subscribe(callBack : MessageListener) {
    this.emitter.subscribe( msg => {
      callBack.onMessage(msg);
    });
  }
}