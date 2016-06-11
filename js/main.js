//arrays branch
var iceCream = ['vanilla', 'chocolate', 'strawberry'];
iceCream.push('mint');
//presidents branch
var presidents = [
  {
    firstName: 'Barrack',
    lastName: 'Obama',
    termLength: 8,
    party: 'Democrat',
    yearsOfPresidency: '2009-2016'
  },
  {
    firstName: 'George',
    lastName: 'Bush',
    termLength: 8,
    party: 'Republican',
    yearsOfPresidency: '2001-2009'
  },
  {
    firstName: 'Bill',
    lastName: 'Clinton',
    termLength: 8,
    party: 'Democrat',
    yearsOfPresidency: '1993-2001'
  },
  {
    firstName: 'George',
    lastName: 'Bush',
    termLength: 4,
    party: 'Democrat',
    yearsOfPresidency: '1989-1993'
  },
  {
    firstName: 'Ronald',
    lastName: 'Reagan',
    termLength: 8,
    party: 'Democrat',
    yearsOfPresidency: '1981-1989'
  }
];
console.log ( presidents[2].firstName + ' ' + presidents[2].lastName );
