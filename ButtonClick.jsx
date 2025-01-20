import React from "react";

const ButtonClick = () => {
	const handleClick = () => {
		console.log("Button clicked!");
	};

	return <button onClick={handleClick}>Click Me</button>;
};

export default ButtonClick;
