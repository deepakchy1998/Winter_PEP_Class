import React from "react";

const EventDelegationExample = () => {
	const handleItemClick = (e) => {
		if (e.target.tagName === "LI") {
			console.log("Item clicked:", e.target.textContent);
		}
	};

	return (
		<ul onClick={handleItemClick}>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	);
};

export default EventDelegationExample;
