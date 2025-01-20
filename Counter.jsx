import React from "react";

const Counter = ({ onIncrement }) => {
	return (
		<div>
			<button onClick={onIncrement}>Increment</button>
		</div>
	);
};

export default Counter;
