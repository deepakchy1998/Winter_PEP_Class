import React from "react";
import PropTypes from "prop-types";

const Product = ({ name, price, isAvailable }) => {
	return (
		<div>
			<h3>Product Details</h3>
			<p>Name: {name}</p>
			<p>Price: ${price}</p>
			<p>Status: {isAvailable ? "Available" : "Out of Stock"}</p>
		</div>
	);
};

Product.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	isAvailable: PropTypes.bool.isRequired,
};

export default Product;
