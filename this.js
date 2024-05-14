// constructor
function IceCream() {
    this.scoops = 0;
  }
  
  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    setTimeout(function() {
      this.scoops++;
      console.log('scoop added!');
    }, 500);
  };
  
  const dessert = new IceCream();
  dessert.addScoop();

//   function IceCream() {
//     this.scoops = 0;
//   }
  
//   // adds scoop to ice cream
//   IceCream.prototype.addScoop = function() {
//     const cone = this; // sets `this` to the `cone` variable
//     setTimeout(function() {
//       cone.scoops++; // references the `cone` variable
//       console.log('scoop added!');
//     }, 0.5);
//   };
  
//   const dessert = new IceCream();
//   dessert.addScoop();