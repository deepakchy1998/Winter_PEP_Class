import React from "react";

const Car = ({ brand = "Toyota" }) => {
	return <p>The car brand is: {brand}</p>;
};

export default Car;
