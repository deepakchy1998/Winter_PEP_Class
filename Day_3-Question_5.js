// 5. Define a function sum that takes three numbers as parameters and returns their sum. Use the spread operator to call this function with an array of numbers.

function sum(x, y, z) {
	return x + y + z;
}

let number = [10, 20, 30];
let result = sum(...number);
console.log(result);
