// Modular Math: Let's create a reusable math library. In a file named math.js, define functions for addition, 
// subtraction, multiplication, and division. In your main application file (e.g., app.js), import the necessary 
// functions from math.js and use them to perform calculations.


export class maths {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    addition(){
        return this.num1 + this.num2;
    }
    sub(){
        return this.num1 - this.num2;

    }
    multiplication(){
        return this.num1 * this.num2;
    }
    division(){
        return this.num1 / this.num2;
    }
}

