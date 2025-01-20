import React, { Component } from "react";

class ClassComponentEvent extends Component {
	constructor() {
		super();
		this.state = { count: 0 };
		this.increment = this.increment.bind(this);
	}

	increment() {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	}

	render() {
		return (
			<div>
				<p>Count: {this.state.count}</p>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

export default ClassComponentEvent;
