const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
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

    
  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Moby Dick','The Odyssey']);
  });
});
