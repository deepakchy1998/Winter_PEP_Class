// 3. Write a function logArguments that takes any number of arguments and logs them to the console. Use rest parameters to collect the arguments.

function logArguments(...x) {
	console.log(x);
}

let result = logArguments(10,20);
console.log(result);
