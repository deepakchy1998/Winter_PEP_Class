import React from "react";

const StatusMessage = ({ status }) => {
	let message;

	switch (status) {
		case "success":
			message = "Operation was successful!";
			break;
		case "error":
			message = "There was an error!";
			break;
		case "loading":
			message = "Loading, please wait...";
			break;
		default:
			message = "Unknown status.";
	}

	return <p>{message}</p>;
};

export default StatusMessage;
