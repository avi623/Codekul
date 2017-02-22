import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
// ng build --env=prod
@Component({
    selector: 'app-databinding',
    templateUrl: './databinding.component.html',
    styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

    myName: string;
    btnOkay = 'Okay';

    constructor() {
        this.myName = 'codekul.com'
    }

    cube(num: number): number {
        return num * num * num;
    }
}