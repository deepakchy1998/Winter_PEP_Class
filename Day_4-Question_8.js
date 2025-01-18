//8. Use an arrow function to reverse a given string. For example, if the input is "hello", the output should be "olleh".

const reverseString = () => {
	let name = "hello";

	let result = name.split("").reverse().join("");
	console.log(result);
};

reverseString();
