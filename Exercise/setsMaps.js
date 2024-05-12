/*Sets and Maps: working with a list of product IDs that contain duplicates, Use a set to remove all the duplicates and return
unique IDs*/


let array = [50, 70, "nice",50]
let set = new Set(array);

console.log(set)

let maps = new Map()
maps.set("fname" , "Beyla")
maps.set("age", 20)
//why is it reassigning and not duplicate it
maps.set("age", 25)
console.log(maps)