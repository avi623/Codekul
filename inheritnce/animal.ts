export class Animal {

    private legs : number;
    constructor() {}

    walk() {
        console.log(`Animal is walking`);
        this.legs++;
    }

    static classMethod(){
        console.log();
    }
}