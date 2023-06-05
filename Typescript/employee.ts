class Employee{
    //id, name, salary

    private _location: string;
    constructor(public id?: number, public name?: string,  public salary?: number){

    }
    public get location(){
        return this._location;
    }
    public set location(value: string){
        this._location = value;
    }
}

var emp = new Employee();

emp.id = 100; emp.name = "Anil"; emp.salary=1.0;
emp.location = "Mumbai";

console.log("emp", emp);

var emp1 = new Employee(200, "Virat", 20000);
console.log("emp1", emp1);

