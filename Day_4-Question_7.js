// 7. Given an array of numbers, use an arrow function to create a new array that contains thesquares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].

const newArray = (arr) => {
	const arr1 = [...arr.map((i) => i * i)];
	return arr1;
};

const arr = [1, 2, 3];
let result = newArray(arr);
console.log(result);
