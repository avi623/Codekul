import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.css']
})
export class VehicleSelectionComponent implements OnInit {

  @Output() vehClk: EventEmitter<string>;
  constructor() {
    this.vehClk = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  emitVehicle(veh: string) {
    console.log('Emmting vehicle VehicleSelectionComponent '+veh);
    this.vehClk.emit(veh);
  }
}