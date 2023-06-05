class Car {
    //One constructor implemention
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    applyBrakes(value) {
        this.speed -= value;
    }
}
let car1 = new Car();
car1.name = "BMW";
car1.speed = 120;
car1.gears = 7;
console.log("car1", car1);
car1.applyBrakes(45);
console.log("car1", car1);
let car2 = new Car("Hyundai");
console.log("car2", car2);
let car3 = new Car("Audi", 130, 7);
console.log("car3", car3);
