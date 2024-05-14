function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function() {
  return this.name;
};

function Employee(name, age, company) {
  // Calling the parent constructor function
  Person.call(this, name, age);
  this.company = company;
}

// Setting the prototype of the child constructor function
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getCompany = function() {
  return this.company;
};

const employee1 = new Employee("John", 25, "Google");
console.log(employee1.name); // "John"
console.log(employee1.age); // 25
console.log(employee1.getName()); // "John"
console.log(employee1.getCompany()); // "Google"
