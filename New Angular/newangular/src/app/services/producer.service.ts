
export class Device {
  name: string;
  price: number;
}

export class ProducerService {

  private devices: any = [];

  constructor() {

  }

  newDevice(device: Device) {
    this.devices.push(device);
  }

  allDevice() {
    return this.devices;
  }
}