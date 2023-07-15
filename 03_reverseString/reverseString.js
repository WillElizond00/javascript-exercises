const reverseString = function(string) {
return string.split("").reverse().join("");

}

let string = "hello there";
let reversedString = reverseString(string);
console.log(reversedString);


// Do not edit below this line
module.exports = reverseString;
