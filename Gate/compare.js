// This is a closure function
// comparing using array and object 
// comparing using arrays only
const deepEqualArrays = (arr1, arr2) => {
    for(let i = 0; i< arr1.length; i++){
        for(let j= 0; j< arr2.length ; j++){
            // for(let key in arr1){
            //     for(let keys in arr2){
            //         if(arr1[key] === arr2[keys]){
            //             return true;
            //         }
            //         else if(arr1[key] !== arr2[keys]){
            //             return false
            //         }
            //     }
            // }
            if(arr1[i] == arr2[j]){
                return true;
            }
            else{

            }
        }
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
