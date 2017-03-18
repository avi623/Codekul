import { ProducerService, MessageListener } from './producer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , MessageListener{

  constructor(
    private producer : ProducerService
  ) { 

  }

  ngOnInit() {
    //this.producer.subscribe(this);
    this.producer.subscribe({
      onMessage : () =>{
      }
    });

    this.producer.subscribePlane(msg =>{
    });
  }

  onMessage(msg : string) : void {

  }
}