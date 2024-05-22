function greet(name = 'Student', greeting = 'Welcome') {
  //name !== 'undefined' ? name : "Student"
  return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!

//Defaults and destructuring
function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
}

//console.log(createGrid([])); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid

function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
    return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
  }
//   console.log(houseDescriptor())
//   console.log(houseDescriptor({}))
//   console.log(houseDescriptor({shutterColors:['orange','blue']}))
//   console.log(houseDescriptor({houseDescriptor:'red'}))
//   console.log(houseDescriptor({houseDescriptor:'red', shutterColors:["white","blue"]}))

function buildHouse ({floors = 1, color = 'red', walls = 'brick'} = {}){
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls`;
}

console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.

