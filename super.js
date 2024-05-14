class Vehicle {
    constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
        this.color = color;
        this.wheels = wheels;
        this.horn = horn;
    }

    honkHorn = () => {
        console.log(this.horn);
    }
}

class Bicycle extends Vehicle {
    constructor(color = 'blue', wheels = 2, horn = 'honk honk'){ //here i am over riding the vehicle class properties
        super(color, wheels, horn); 
        this.color = color;
        this.wheels = wheels; 
        this.horn = horn; 
    }
    honkHorn(){
        console.log(super[honkHorn()]  ); //to call my function parent honkHorn we use super()
    }
}

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk