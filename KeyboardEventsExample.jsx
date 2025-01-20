import React from "react";

const KeyboardEventsExample = () => {
	const handleKeyPress = (e) => {
		console.log("Key pressed:", e.key);
	};

	return <input type="text" onKeyPress={handleKeyPress} />;
};

export default KeyboardEventsExample;
