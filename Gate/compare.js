// This is a closure function
const deepEqualArrays = (arr1, arr2) => {
    let arra1;
    let arra2;
    arra1 = JSON.stringify(...arr1);
    arra2 = JSON.stringify(...arr2)
    if(arra1 == arr2){
        return true
    }
    else{
        return false
    }
}

const array1 = [
 { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
 { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
 ];
const array2 = [
{ id: 1, name: "Alice", details: { age: 30, city: "New York" } },
 { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
  ];
console.log(deepEqualArrays(array1, array2))

const arrayOne = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const arrayTwo = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];
console.log(deepEqualArrays(arrayOne, arrayTwo));
