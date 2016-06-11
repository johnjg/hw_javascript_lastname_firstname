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
//functions branch
function howdy() {
  return 'John Gotschall says hi!';
}
console.log ( howdy() );
//function expressions
var numba = function ( string ) {
  if (string.length < 7) {
    console.log ('What a short little word!');
  } else if (string.length > 7) {
    console.log ('I’m sorry, but that’s too many to count.');
  } else {
    console.log ('7, what a perfect choice!');
  }
}
numba ('7');
numba ('seventy');
numba ('university');
//inception function
function inception ( display, favMovie ) {
  display(favMovie);
}
var favMovie = 'Batman';
function display () {
  return favMovie + ' is a fantastic movie.'
};
console.log ( display() );
