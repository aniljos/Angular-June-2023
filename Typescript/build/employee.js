class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
}
var emp = new Employee();
emp.id = 100;
emp.name = "Anil";
emp.salary = 1.0;
emp.location = "Mumbai";
console.log("emp", emp);
var emp1 = new Employee(200, "Virat", 20000);
console.log("emp1", emp1);
