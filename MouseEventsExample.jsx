import React, { useState } from "react";

const MouseEventsExample = () => {
	const [bgColor, setBgColor] = useState("white");

	return (
		<div
			style={{
				backgroundColor: bgColor,
				padding: "20px",
				textAlign: "center",
				border: "1px solid black",
			}}
			onMouseEnter={() => setBgColor("lightblue")}
			onMouseLeave={() => setBgColor("white")}
		>
			Hover over me!
		</div>
	);
};

export default MouseEventsExample;
