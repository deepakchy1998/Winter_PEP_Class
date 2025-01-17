// 2. Create a function mergeArrays that takes two arrays as parameters and returns a new array that combines both arrays using the spread operator.

function mergeArrays(arr1, arr2) {
	const arr3 = [...arr1, ...arr2];
	return arr3;
}

let result = mergeArrays([1, 2, 3], [4, 5, 6]);
console.log(result);
