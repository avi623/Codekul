import { Tiger } from './tiger';
import { Car } from './../classes-and-objects/car';
import { Animal } from './animal';

let animal : Animal = new Animal();
animal.walk();

let tiger = new Tiger();
tiger.walk();
console.log(`
    Is Bengol tiger ${tiger.isBengol()}
`);

let animalTiger : Animal = new Tiger(); 
animalTiger.walk();
Animal.classMethod();