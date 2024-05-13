let myFavouriteFlavors = new Set()
myFavouriteFlavors.add("chocolate chip")
myFavouriteFlavors.add("cookies and cream")
myFavouriteFlavors.add("strawberry")
myFavouriteFlavors.add("vanilla")
myFavouriteFlavors.add("strawberry") //double elements, it doesn't add but it doesn't throw an error

console.log(myFavouriteFlavors)
console.log(myFavouriteFlavors.delete("strawberry"))

console.log(myFavouriteFlavors)

let arr = ['1','my','new','yes',2]
arr[0] = delete arr[0] //when delete an element in an array without using an array method it leaves an empty space
console.log(arr[0])

let myObject1 = {greeting : "hello"}
let myObject2 = {greeting : "hi"}
let myObject3 = {greeting : "morning"}

//Sets contain unique values but they can both be primitive values or reference values
let myObject = new Set();
myObject.add(myObject1);
myObject.add(myObject2);
myObject.add(myObject3);
console.log(myObject)
