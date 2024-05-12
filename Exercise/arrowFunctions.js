/* a function to calculate the area of a triangle, write a consice function calculateArea(width, height) that returns
the product of width and height (create an arrow function to check if a number is odd or even)*/

const calculateArea = (width, height) =>  width*height;

console.log(calculateArea(10,15))

const oddOrEven = (num) => {
    if(num % 2 === 0){
        return "Even"
    }
    else{
        return "Odd"
    }
}

console.log(oddOrEven(13))