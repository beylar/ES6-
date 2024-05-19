/*Generator fibonacci: numbers are fun! Write a generator function fibonacciGenerator(limit) that yields
Fibonacci numbers up to a specified limit. Remember, the first two fibonacci numbers are 0 and 1 and each subsequent 
number is the sum of the previous two.*/

function * fibonacciGenerator(limit){
   let num1 = 0;
   let num2 = 1;
   yield num1;
   yield num2;
   let next;
    for(let i=1; i<=limit; ++i){
        next = num1 + num2;
        yield(next)
        num1 = num2;
        num2 = next;

    }

}

const fibonacci = fibonacciGenerator(10)
// console.log(fibonacci.next().value)
// console.log(fibonacci.next().value)
// console.log(fibonacci.next().value)
// console.log(fibonacci.next().value)
// console.log(fibonacci.next().value)
// console.log(fibonacci.next().value)
// console.log(fibonacci.next().value)
// console.log(fibonacci.next().value)
// console.log(fibonacci.next().value)
// console.log(fibonacci.next().value)

for(let i=0; i<10; i++){
    console.log(fibonacci.next().value)
}

