// function square(x) {
//         return x*x;
// };

// console.log(square(7));

// const squareArrow = (x) => {
//    return x*x ;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Mike Smith'));