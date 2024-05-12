/*Create a class Product with properties name (string), price (number) and methods:
getDetails(): returns a string representation of the product details name and price
applyDiscount(discunt) : applies a discount(percentage) to the products price and returns the discounted price
*/

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;

    }

    getDetails(){
        return `${this.name} costs ${this.price}`
    }

    applyDiscount(discount){
        return `The discount price is ${this.price * (discount / 100)}`
    }
}

let product = new Product("Juice", 2000);
console.log(product.getDetails());
console.log(product.applyDiscount(20))