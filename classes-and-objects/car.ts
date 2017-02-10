import { Engine } from './engine';

export class Car {
    //private engine : Engine;
    speed : number;

    constructor(private engine? : Engine) {
        //this.engine = engine;
    }

    speedUp(speed? : number) : number {
        return this.speed++;
    }
}