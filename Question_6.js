// 6. Write a function createUserProfile that takes three parameters: username, age (defaulting to 25), and country (defaulting to "Unknown"). Return an object with these properties.

function createUserProfile(username, age = 21, country = "India") {
	Person = {
		username,
		age,
		country,
	};
	return Person;
}

let result = createUserProfile("Deepak");
console.log(result);
