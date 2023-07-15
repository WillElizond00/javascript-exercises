let array = [1, 2, 3, 4];

const removeFromArray = function() {

    let index = array.indexOf(3);
    if(index !== -1){
        array.splice(index, 1)
    }

return array
};

console.log(removeFromArray())

// Do not edit below this line
module.exports = removeFromArray;
