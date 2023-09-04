const palindromes = function (str) {
str = str.toLowerCase();
const cleanedStr = str.replace(/[^a-z0-9]/g, '')
const reversedStr = cleanedStr.split('').reverse().join('');
return cleanedStr === reversedStr;

};



// Do not edit below this line
module.exports = palindromes;

