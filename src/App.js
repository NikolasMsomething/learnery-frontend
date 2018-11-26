import React, { Component } from "react";

import Register from "./components/Register";
import Header from "./components/Header.js";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Register />
			</div>
		);
	}
}

export default App;
