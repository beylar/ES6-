function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;
    }

    console.log('the function has ended');
}
const generatorIterator = getEmployee();
generatorIterator.next();
generatorIterator.next();
generatorIterator.next();
generatorIterator.next();

//the function executes once and the stops and expects a new .next() to iterate to the next value

let name = generatorIterator.next().value;
 
// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value; 

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value; 

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value; 

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value; 
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value; 

// displays each name with description on its own line
positions.join('\n'); 