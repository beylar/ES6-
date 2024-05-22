// Create the following variables:

// uniqueFlavors and give it the value of an empty WeakSet object
// flavor1, and set it to the object { flavor: 'chocolate' }
// flavor2, and set it to an object with a property of flavor and a value of your choice
// Use the .add() method to add the objects flavor1 and flavor2 to uniqueFlavors.

// Use the .add() method to add the flavor1 object to the uniqueFlavors set, again.

var uniqueFlavors = new WeakSet();
let flavor1 = { flavor : 'chocolate'}
let flavor2 = { flavor : "vanilla"}
console.log(uniqueFlavors.add(flavor1));
console.log(uniqueFlavors.add(flavor2));
console.log(uniqueFlavors.add(flavor1));