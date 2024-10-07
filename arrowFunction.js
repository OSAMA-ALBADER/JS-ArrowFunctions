// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => `Hello, ${name}!`;
console.log(greet("my name is osama"));

// Write a simple arrow function that takes two parameters and returns their sum.

const add = (a, b) => {
  return a + b;
};
console.log(add(15, 4));

// Write a simple arrow function that squares a number.

const square = (x) => {
  return x ** 2;
};
console.log(square(10));

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns
// a new array with each number squared.

const squareNumbers = (numbers) => {
  return numbers.map((number) => number ** 2);
};
const numbers = [5, 10, 15, 20];
console.log(squareNumbers(numbers));
