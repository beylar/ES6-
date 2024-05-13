let avg = 0
let total = 0


function average(...nums) {
    let avg = 0
    let total = 0
    if(nums.length === 0){
        return avg;
    }
    else{
    for(const num of nums){
        total += num;
        
    }
 
    avg = total / nums.length;
    return avg
    }
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
