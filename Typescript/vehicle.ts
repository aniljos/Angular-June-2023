interface Vehicle{
    
    name: string;
    speed: number;
    gears: number;

    applyBrakes(value: number): void;
}

class Car implements Vehicle{


    name: string;
    speed: number;
    gears: number;

    //Multiple construction declarations
    constructor();
    constructor(name: string);
    constructor(name: string, speed: number, gears: number);
   

    //One constructor implemention
    constructor(name?: string, speed?: number, gears?: number){
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    
    applyBrakes(value: number): void {
       this.speed -= value;
    }
}

let car1: Vehicle = new Car()
car1.name = "BMW"; car1.speed=120; car1.gears=7;
console.log("car1", car1);
car1.applyBrakes(45);
console.log("car1", car1);


let car2 = new Car("Hyundai");
console.log("car2", car2);

let car3 = new Car("Audi", 130, 7);
console.log("car3", car3);

