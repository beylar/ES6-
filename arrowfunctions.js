const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

// const longNames = names.filter(function(name) {
//   return name.length > 6;
// });

const longNames = names.filter(name => name.length > 6)
console.log(longNames)

const greet = name => `Hello ${name}!`;
console.log(greet("Hono"))

const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');

const timeOut = setTimeout(_ =>{
    console.log("The time to run")
}, 2000)