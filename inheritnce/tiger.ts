import { Animal } from './animal';

export class Tiger extends Animal {

    isBengol() : boolean{
        return false;
    }

    walk() {
        super.walk();
        console.log(`Tiger is walking`);
    }
}