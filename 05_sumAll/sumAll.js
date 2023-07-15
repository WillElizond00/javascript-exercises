array = [1,2,3,4]

const sumAll = function(a,b) {
let total = 0;
for (let i = a; i <= b ; i++) {
    total += i;
    
}
return total
};

let result = sumAll(1,4);
console.log(result); //10
// Do not edit below this line
module.exports = sumAll;

