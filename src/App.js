import React, { Component } from "react";
import Landing from "./components/Landing";
import { Route, Switch, Redirect } from "react-router-dom";
import Learn from "./components/Learn";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/learn" component={Learn} />
						<Redirect to="/" />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default connect()(App);
