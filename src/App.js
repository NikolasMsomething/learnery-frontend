import React, { Component } from "react";
import Router from "./components/routes/Router";
import Register from "./components/Register";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Modal />
				<Router />
				{/* <Footer /> */}
			</div>
		);
	}
}

export default App;
