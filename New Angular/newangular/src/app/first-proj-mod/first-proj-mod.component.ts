import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-proj-mod',
  templateUrl: './first-proj-mod.component.html',
  styleUrls: ['./first-proj-mod.component.css']
})
export class FirstProjModComponent implements OnInit {
  veh: string;
  constructor() { }

  ngOnInit() {
  }

  onVehicleBtnClick(veh: string) {
    console.log(`In parent ${veh}`);
    this.veh = veh;
  }
}