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
