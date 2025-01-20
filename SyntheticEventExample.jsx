import React from "react";

const SyntheticEventExample = () => {
	const handleChange = (e) => {
		console.log("Input value:", e.target.value);
	};

	return <input type="text" onChange={handleChange} />;
};

export default SyntheticEventExample;
