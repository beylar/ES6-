function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

//instance of the constructor function
var myCar = new Car('Toyota', 'Corolla', 2005);


console.log(myCar.make); 
console.log(myCar.model);
console.log(myCar.year); 
