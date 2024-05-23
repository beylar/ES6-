// Proxy Power: Data validation is crucial. Write a function createValidationProxy(obj) that takes an object 
// and returns a proxy that validates any attempt to set a property value. If the value is invalid (e.g., not 
//     a number for a numeric property), throw an error.

function createValidationProxy(obj){
    obj = {
        name: "Charite Uwatwembi",
        age: 22
    }
    const handler = {
        get(target, prop){
            if(prop.value === this.name){
                return target;
            }
            else{
                throw new Error("Wrong")
            }
        // set(target, prop, value){
        //     if(target){
        //         return pr
        //     }
        // }
        }
    }

}
const proxyObject = new Proxy({name:"chartine", age: 22});
console.log(proxyObject.get())
