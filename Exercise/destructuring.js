/* You're building a profile system. Create a function extractProfile(user) that takes an object user with 
properties name, age, city and occupation. using destructuring return a new object containing only the name 
and city properties.*/

const user = {
    fname: "Beyla",
    city: "Kigali",
    age: 20,
    occupation: "Software Engineer"
};

function extractProfile({fname, city}) {
    return {fname, city};
}

console.log(extractProfile(user));
