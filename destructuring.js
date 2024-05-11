const Person = {
    name : "Beyla",
    age : 20,
    address: {
        state: "Michigan"
    }
}

const {address : {state}} = Person;
console.log({address : {state}})