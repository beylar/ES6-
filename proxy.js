const person = {
  name: 'John Doe',
  age: 12
};

const handler = {
  get(target, prop) {
    if (prop === 'name') {
      return 'Mr. ' + target[prop];
    }
   
    return target[prop];
  },
  set(target, prop,value){
    if(prop === 'salary') {
      if (typeof value === "number"){
        target[prop] = 'salary is: ' + value
      }
      // value = 300;
      // target[prop] = 'salary is: ' + value
     throw new Error ('error here')
    }
    
  }
};

const proxy = new Proxy(person, handler);
console.log(proxy.age);
proxy['salary'] = "beyla"
console.log(proxy);
console.log(person);

////
const person1 = {
  name: 'John Doe',
  sayHello() {
    return 'Hello, my name is ' + this.name;
  }
};

const handler1 = {
  apply(target, thisArg, args) {
    console.log('Calling function ' + target.name);
    return target.apply(thisArg, args);
  }
};

const proxy1 = new Proxy(person1.sayHello, handler1);

//proxy();