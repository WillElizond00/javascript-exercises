const getTheTitles = function(booksArray) {
var emptyArr = [];
for (let i = 0; i < booksArray.length; i++) {
    const element = booksArray[i];
    emptyArr.push(element.title);
    
}
return emptyArr;
};

const books = [
    {
        title:'Moby Dick',
        author: 'Herman Melville'
    },
    {
        title:'The Odyssey',
        author: 'Homer'
    }
]

// Do not edit below this line
module.exports = getTheTitles;
