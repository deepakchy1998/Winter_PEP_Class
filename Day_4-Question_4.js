// 1. Replace Function Expressions with arrow functions in the code below:

const ask = (question, yes, no) => {
	if (confirm(question)) yes();
	else no();
};

ask(
	"Do you agree?",
	() => alert("You agreed."),
	() => alert("You canceled the execution.")
);
