// Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)

// const originalObj = {aa: "1", bf: "3", cq: "5"};
// const reversedObj = reverseObject(originalObj);

// // console.log(reversedObj); 
// output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output

const reverse = (originalObj) => {
    const reversedObj = {};
    
    for(key in originalObj){
      reversedObj[originalObj[key]] = key;
    }
    
    return reversedObj;
    
  }
  
  console.log(reverse({aa: "1", bf: "3", cq: "5"}))